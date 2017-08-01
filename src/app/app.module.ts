import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AuthProvider} from "../providers/auth";

import { MyApp } from './app.component';
import {BlockUi} from "../providers/block-ui";
import {L2nHttp} from "../providers/l2n-http";
import {NetworkConnectionProvider} from "../providers/networkConnection";
import {HttpModule} from "@angular/http";
import {Network} from "@ionic-native/network";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScreenOrientation} from "@ionic-native/screen-orientation";

@NgModule({
  declarations: [
    MyApp
  ],

  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation,
    BlockUi,
    L2nHttp,
    NetworkConnectionProvider
  ]

})
export class AppModule {}
