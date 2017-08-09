import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {AuthProvider} from "../../providers/auth";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-problem-soluation',
  templateUrl: 'problem-soluation.html',
})
export class ProblemSoluationPage {

  private loadedData =[];
  adminFlag:boolean=false;

  constructor(private l2nHttp:L2nHttp,
              private auth:AuthProvider,
              public navCtrl: NavController) {

  }

  ionViewDidEnter(){

    if(this.auth.currentUser.authority =='1'){

      this.adminFlag = true;
      this.l2nHttp.getRequest('solution-lists','ডাটা লোড করা হচ্ছে...').then(
        data => {
          this.loadedData=data;
          console.log(this.loadedData)
        },
        err => {}
      );
    }else{
      this.adminFlag = false;
      this.l2nHttp.getRequest('solution-lists','ডাটা লোড করা হচ্ছে...').then(
        data => {
          this.loadedData=data;
          console.log(this.loadedData)
        },
        err => {}
      );
    }

  }

  adminSolution(session){
    this.navCtrl.push('SolutionDetailsPage',session);
  }

}
