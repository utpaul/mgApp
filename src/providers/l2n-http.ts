import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthProvider} from "./auth";
import {Http, Headers} from "@angular/http";
import {BlockUi} from "./block-ui";
import {Platform} from "ionic-angular";
import {API_CONFIG} from "../constants/api";

@Injectable()
export class L2nHttp {

  private baseUrl:string ='/api/';

  constructor(private blockUi: BlockUi,
              private  _auth: AuthProvider,
              public platform: Platform){

    this.platform.ready().then(() => {

      if(platform.is('core')){
        this.baseUrl ='/api/';
      } else if(platform.is('android')){
        this.baseUrl = API_CONFIG.baseUrl;
      }

    });
  }

  get http():Http {
    return this._auth.http;
  }

  getRequest(url, preMessage): Promise<any> {

    return new Promise((resolve, reject) => {

      let a = this.blockUi.show(preMessage);
      this.platform.ready().then(() => {
        this.http.get(this.baseUrl + url,
          { headers: new Headers({
            "X-Auth-Token": this._auth.authToken,
            'X-API-KEY': API_CONFIG['X-API-KEY']
          })}).map(res => res.json())
          .subscribe(
            data => {
              console.log('success getting');
              a.dismiss();
              resolve(data);
            },
            err => {reject(err);
              a.dismiss();}
          );
      })
    });
  }

  postRequest(url, data, preMessage): Promise<any> {

    return new Promise((resolve, reject) => {

      let a = this.blockUi.show(preMessage);
      this.platform.ready().then(() => {
        this.http.post( this.baseUrl + url, data,
          { headers: new Headers({
            "X-Auth-Token": this._auth.authToken,
            'X-API-KEY': API_CONFIG['X-API-KEY']
          })
          }).map(res => res.json())
          .subscribe(
            data => {
              console.log('success');
              resolve(data);
              a.dismiss();
            },
            err => {
              reject(err);
              console.log(err);
              a.dismiss();
            }
          );
      })
    });

  }

}
