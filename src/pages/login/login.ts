import { Component } from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';

import {NetworkConnectionProvider} from "../../providers/networkConnection";

import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {AuthProvider} from "../../providers/auth";
import {BlockUi} from "../../providers/block-ui";


@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isOnline: boolean = false;
  profilePicture: any = "assets/img/logo.png";

  constructor(public navCtrl: NavController,
              public platform: Platform,
              private networkCheck:NetworkConnectionProvider,
              private screenOrientation: ScreenOrientation,
              private auth: AuthProvider,
              private blockUi: BlockUi) {

    this.platform.ready().then(() => {
      this.isOnline =this.networkCheck.isOnline;

      if(platform.is('core')){

      } else if(platform.is('android')){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
    });

  }

  login(FormLogin){

    console.log(FormLogin.value);

    this.platform.ready().then(() => {
      let a =this.blockUi.show('অপেক্ষা করুন...');
      this.auth.login(FormLogin.value.phone,FormLogin.value.password)
        .then(data =>{
          a.dismiss();
        }).catch(error =>{
        a.dismiss();
        this.blockUi.alert('দুংখিত! মোবাইল নাম্বার অথবা পাসওয়ার্ড সঠিক নয়।', 'লগইন সমস্যা!');
      })

    })

  }

}
