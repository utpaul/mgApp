import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BlockUi} from "../../providers/block-ui";
import {L2nHttp} from "../../providers/l2n-http";
import {AuthProvider} from "../../providers/auth";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public open:boolean = false;
  public password ={oldPassword:'', newPassword:''};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private blockUi: BlockUi,
              private l2nHttp:L2nHttp,
              private auth:AuthProvider) {

  }

  toggleSection() {
    this.open == true ?this.open=false:this.open = true;
  }

  changePassword(){

    console.log(this.auth.phoneNo);

    if(this.password.newPassword == this.password.oldPassword){
      this.blockUi.alert('দুংখিত! পাসওয়ার্ড পরিবর্তন সম্ভব না।', 'একই পাসওয়ার্ড!');
    }else{

      this.l2nHttp.postRequest('password-change',
        this.password, 'ডেটা সংরক্ষণ হচ্ছে...').then(
        data => {
          this.auth.destroyUserCredentials();
          this.auth.login(this.auth.phoneNo,this.password.newPassword);
        }, err => {
          console.log(err);
        }
      );

    }
  }

}
