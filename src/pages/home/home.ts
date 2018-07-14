import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {API_CONFIG} from "../../constants/api";

@IonicPage({
  name: 'page-home'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  private imageUrl:any;
  private loadedData =[];
  private loadedDataList =[];
  private converter:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private l2nHttp:L2nHttp) {
    this.imageUrl =API_CONFIG.misBase4;
  }


  ionViewDidEnter(){

    this.l2nHttp.getRequest('public-question','তথ্য আহরিত হচ্ছে...')
      .then(
        data => {
          this.loadedData=data.list;
          this.loadedDataList = data.notification;

          console.log(this.loadedData);
            for(let i=0; i<this.loadedData.length;i++){

            let date1: string = this.loadedData[i].entryDateTime;
            let diffInMs: number = Date.parse(new Date().toLocaleString()) - Date.parse(date1);
            let diffInMin: number = diffInMs / 1000 / 60;

            if(Math.floor(diffInMin)>59){

              if(Math.floor(diffInMin/60) > 23){
                this.loadedData[i].difference  =Math.floor(diffInMin/(60*24)) + " দিন পূর্বে";
              }else{
                this.loadedData[i].difference  =Math.floor(diffInMin/60) + " ঘন্টা পূর্বে";
              }

            }else {
              this.loadedData[i].difference  =Math.ceil(diffInMin) + " মিনিট পূর্বে";
            }

            this.converter =(this.loadedData[i].dateOfQuestion).split('-');
            if(parseInt(this.converter[1]) ==1){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' জানুয়ারী '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==2){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' ফেব্রুয়ারী '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==3){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' মার্চ '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==4){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' এপ্রিল '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==5){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' মে '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==6){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' জুন '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==7){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' জুলাই '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==8){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' আগস্ট '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==9){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' সেপ্টেম্বর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==10){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' অক্টোবর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==11){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' নভেম্বর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==12){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' ডিসেম্বর '+this.converter[2];
            }

        }

          for(let i=0; i<this.loadedDataList.length;i++) {

            let date1: string = this.loadedDataList[i].solutionTime;

            let diffInMs: number = Date.parse(new Date().toLocaleString()) - Date.parse(date1);
            let diffInMin: number = diffInMs / 1000 / 60;

            console.log(diffInMin);

            if (Math.floor(diffInMin) > 59) {

              if (Math.floor(diffInMin / 60) > 23) {
                this.loadedDataList[i].difference = Math.floor(diffInMin / (60*24)) + " দিন পূর্বে";
              } else {
                this.loadedDataList[i].difference = Math.floor(diffInMin / 60) + " ঘন্টা পূর্বে";
              }

            } else {
              this.loadedDataList[i].difference = Math.ceil(diffInMin) + "মিনিট পূর্বে";
            }

            this.converter =(this.loadedDataList[i].problemEntryDate).split('-');
            if(parseInt(this.converter[1]) ==1){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' জানুয়ারী '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==2){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' ফেব্রুয়ারী '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==3){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' মার্চ '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==4){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' এপ্রিল '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==5){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' মে '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==6){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' জুন '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==7){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' জুলাই '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==8){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' আগস্ট '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==9){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' সেপ্টেম্বর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==10){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' অক্টোবর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==11){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' নভেম্বর '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==12){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' ডিসেম্বর '+this.converter[2];
            }

          }

      },
      err => {}
    );

  }

  giveSolution(item){

    console.log(item);
    this.navCtrl.push('AdminProblemFormPage',{id:item.id,
      entry_time2:item.dateOfQuestion, category_text:item.categoryText,stage_text:item.stageText,
      description : item.description,image: item.image,recordData: item.record,username:item.userName});
  }

  solutionDetails(item){

    this.converter =item.solutionTime.split(' ');
    this.navCtrl.push('SolutionDetailsPage',{solution_time: this.converter[0], problem_id: item.problemId,
      problem_entry_date:item.problemEntryDate,
      problem_category_text: item.categoryText,problem_stage_text: item.stageText,problem_description:item.problemDescription,
      problem_owner:item.problemUser,problem_image:item.problemsImage,problem_record:item.problemRrecordData,
      solution_description:item.solutionDescription, solution_owner:item.solutionUser,solution_record:item.solutionRecordData});
  }

}
