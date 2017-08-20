import {Component, ViewChild} from '@angular/core';
import {Platform, Events, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NetworkConnectionProvider} from "../providers/networkConnection";
import {User} from "../mapper/user";
import {AuthProvider} from "../providers/auth";
import {APP_MENUS} from "../constants/menu";


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  isAuthenticated: boolean = false;
  user: User;
  rootPage: any;
  pages: Array<{title: string, icon: string, component: any}> = [];

  constructor(public platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private auth:AuthProvider,
              private networkCheck:NetworkConnectionProvider,
              private eventCtrl: Events) {

    this.initializeApp(statusBar, splashScreen);

  }

  initializeApp(statusBar: StatusBar,
                splashScreen: SplashScreen) {

    this.platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.auth.onSessionStore.subscribe(() => {
        this. pages =[];
        if (this.auth.isAuthenticated == true) {
          this.isAuthenticated = true;
          this.user = new User(this.auth.currentUser);

          if(this.auth.currentUser.authority =='1'){
            this.pages.push({title: 'তথ্য সহায়তা', icon: 'ios-help-circle-outline', component: 'TechnicalHelpPage'});
            this.pages.push({title: 'সেটিংস', icon: 'ios-settings-outline', component: 'SettingsPage'})
          }else{
            APP_MENUS.sidebar.forEach(el => {
              this.pages.push({title: el.label, icon: el.icon, component: el.component})
            });
          }

          this.nav.setRoot('page-home').then(() => {
          });

        } else {
          this.nav.setRoot('page-slides').then(() => {
            this.isAuthenticated = false;
          });
        }
      });

      this.eventCtrl.subscribe('network:online', () => {

      });

      this.eventCtrl.subscribe('network:offline', () => {

      });
    });

  }

  logout() {

    this.nav.setRoot('page-slides').then(() => {
      this.auth.destroyUserCredentials();
      this.pages=[];
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }


}

