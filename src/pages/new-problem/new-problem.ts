import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";
import {L2nHttp} from "../../providers/l2n-http";
import {BlockUi} from "../../providers/block-ui";
import {AuthProvider} from "../../providers/auth";

@IonicPage()
@Component({
  selector: 'page-new-problem',
  templateUrl: 'new-problem.html',
})
export class NewProblemPage {

  private problemFormPage = 'ProblemFormPage';
  private imageUrl:any;
  private loadedData =[];
  adminFlag:boolean=false;

  constructor(private l2nHttp:L2nHttp,
              private blockUi:BlockUi,
              public navCtrl: NavController,
              private auth:AuthProvider) {

    this.imageUrl =API_CONFIG.misBase;

  }


  ionViewDidEnter(){

    if(this.auth.currentUser.authority =='1'){

      this.adminFlag = true;
      this.l2nHttp.getRequest('problem-lists','ডাটা লোড করা হচ্ছে...').then(
        data => {
          this.loadedData=data;
          console.log(this.loadedData);
        },
        err => {}
      );
    }else{
      this.adminFlag = false;
      this.l2nHttp.getRequest('problem-lists','ডাটা লোড করা হচ্ছে...').then(
        data => {
          this.loadedData=data;
          console.log(this.loadedData);
        },
        err => {}
      );
    }

  }

  imageShow(id, ref){

    if(parseInt(id) == 0){
      this.blockUi.alert('কোনও চিত্র পাওয়া যায়নি।', 'মনোযোগ !');
    }else{
      this.navCtrl.push('ImageShowPage',{id: ref, flag: 0})
    }

  }

  problemSession(session){

    if(this.auth.currentUser.authority =='1'){
      this.navCtrl.push('AdminProblemFormPage',session)
    }else{
      this.navCtrl.push('DetailsProblemPage',session)
    }

  }


  recordedAudio(id){

    if(parseInt(id) == 0){
      this.blockUi.alert('কোন অডিও পাওয়া যায়নি।', 'মনোযোগ !');
    }else{
      this.navCtrl.push('AudioPlayPage',{id: id, flag: 0})
    }

  }



}
