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

  private segment ='all';
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

    this.l2nHttp.getRequest('public-question','ডাটা লোড করা হচ্ছে...')
      .then(
        data => {
          this.loadedData=data.list;
          this.loadedDataList = data.notification;
          console.log(this.loadedDataList);

            for(let i=0; i<this.loadedData.length;i++){

            let date1: string = this.loadedData[i].entryDateTime;
            let diffInMs: number = Date.parse(new Date().toLocaleString()) - Date.parse(date1);
            let diffInMin: number = diffInMs / 1000 / 60;

            if(Math.ceil(diffInMin)>59){

              if(Math.ceil(diffInMin/60) > 23){
                this.loadedData[i].difference  =Math.ceil(diffInMin/(60*24)) + " Days Ago";
              }else{
                this.loadedData[i].difference  =Math.ceil(diffInMin/60) + " Hours Ago";
              }

            }else {
              this.loadedData[i].difference  =Math.ceil(diffInMin) + " Min Ago";
            }



            this.converter =(this.loadedData[i].dateOfQuestion).split('-');
            if(parseInt(this.converter[1]) ==1){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Jan '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==2){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Feb '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==3){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Mar '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==4){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Apr '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==5){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' May '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==6){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Jun '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==7){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Jul '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==8){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Aug '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==9){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Sep '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==10){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Oct '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==11){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Nov '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==12){
              this.loadedData[i].dateOfQuestion1 =this.converter[0]+' Dec '+this.converter[2];
            }

        }

          for(let i=0; i<this.loadedDataList.length;i++) {

            let date1: string = this.loadedDataList[i].solutionTime;

            let diffInMs: number = Date.parse(new Date().toLocaleString()) - Date.parse(date1);
            let diffInMin: number = diffInMs / 1000 / 60;

            console.log(diffInMin);

            if (Math.ceil(diffInMin) > 59) {

              if (Math.ceil(diffInMin / 60) > 23) {
                this.loadedDataList[i].difference = Math.ceil(diffInMin / (60*24)) + " Days Ago";
              } else {
                this.loadedDataList[i].difference = Math.ceil(diffInMin / 60) + " Hours Ago";
              }

            } else {
              this.loadedDataList[i].difference = Math.ceil(diffInMin) + " Min Ago";
            }

            this.converter =(this.loadedDataList[i].problemEntryDate).split('-');
            if(parseInt(this.converter[1]) ==1){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Jan '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==2){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Feb '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==3){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Mar '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==4){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Apr '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==5){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' May '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==6){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Jun '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==7){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Jul '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==8){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Aug '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==9){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Sep '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==10){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Oct '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==11){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Nov '+this.converter[2];
            }else if(parseInt(this.converter[1]) ==12){
              this.loadedDataList[i].dateOfQuestion1 =this.converter[0]+' Dec '+this.converter[2];
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
