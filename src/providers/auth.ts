import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import localForage from "localforage";

import {User} from "../mapper/user";
import {LOCAL_TOKEN_KEY} from "../constants/";
import {Platform} from "ionic-angular";
import {JwtHelper} from "angular2-jwt";
import {API_CONFIG} from "../constants/api";

@Injectable()
export class AuthProvider {

  private _onSessionStore = new EventEmitter<any>();
  private _currentUser:User;
  private _isAuthenticated = false;
  private _authToken:string;
  private error:string;
  private _http: Http;
  private _loaded = false;
  private _phoneNo = '';

  private baseUrl:string ='/api/';
  private jwtHelper: JwtHelper = new JwtHelper();

  contentHeader: Headers = new Headers(
    {'X-API-KEY': [API_CONFIG['X-API-KEY']],
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  constructor(http: Http, public platform: Platform) {
    this._http = http;

    this.platform.ready().then(() => {

      if(platform.is('android')){
        this.baseUrl = API_CONFIG.baseUrl;
      } else{
        this.baseUrl ='/api/';
      }

      this.loadUserCredentials();
    });

  }

  ready():Promise<any> {

    if(this._loaded) {
      return Promise.resolve();
    }
    return new Promise((resolve)=>{
      let a = this.onSessionStore.subscribe(()=>{
        resolve();
        a.unsubscribe();
      });
    });

  }

  get http() {
    return this._http;
  }

  get authToken(): string {
    return this._authToken;
  }

  get phoneNo(): string {
    return this._phoneNo;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  get onSessionStore(): EventEmitter<any> {
    return this._onSessionStore;
  }

  loadUserCredentials() {
    localForage.getItem(LOCAL_TOKEN_KEY)
      .then(
        data => this.useCredentials(data),
        error => {console.error(error);
        this.destroyUserCredentials();}
      );
  }

  useCredentials(token) {
    this._authToken = token;
    this._currentUser = this.getClaimsFromToken(token);
    this._isAuthenticated = this._currentUser != null;
    this._loaded = true;
    this.onSessionStore.emit();
  }

  getClaimsFromToken(token):User {
    let user:User;

    if (typeof token !== 'undefined' && token != null) {
      let payload = this.jwtHelper.decodeToken(token);
      this._phoneNo=payload.user.phone;
      console.log(this._phoneNo);
      user = payload.user;
    }

    return user;
  }

  storeUserCredentials(token) {
    if (token == null) {
      this.destroyUserCredentials();
    } else {
      localForage.setItem(LOCAL_TOKEN_KEY, token)
        .then(
          data => console.log(data),
          error => console.error(error)
        );

      this.useCredentials(token);
    }
  }

  destroyUserCredentials() {

    console.log('destroying');

    this._authToken = undefined;
    this._currentUser = new User({});
    this._isAuthenticated = false;
    localForage.removeItem(LOCAL_TOKEN_KEY)
      .then(
        data => {this.onSessionStore.emit();},
        error => console.error(error)
      );
  }


  get currentUser(): User {
    return this._currentUser;
  }


  login(phone:string,password:string): Promise<any> {

    return new Promise((resolve, reject) => {

      this.platform.ready().then(() => {

          this._http.post(this.baseUrl + 'access-token',
            "phone=" + phone +
            "&password=" + password,
            { headers: this.contentHeader })
            .map(res => res.json())
            .subscribe(
              data => {
                console.log(data.token);
                this.authSuccess(data.token);
                resolve('Login success.');
              },
              err => {this.error = err;
                console.log(err);
                reject('Login Failed.');}
            );
        });
    });

  }

  authSuccess(token) {
    this.error = null;
    this.storeUserCredentials(token);
  }
}
