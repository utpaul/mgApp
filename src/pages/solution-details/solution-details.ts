import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-solution-details',
  templateUrl: 'solution-details.html',
})
export class SolutionDetailsPage implements OnInit{

  private loadData:any;
  private imageUrl:any;
  private imagesList:Array<string>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.imageUrl =API_CONFIG.misBase2;
  }

  ngOnInit(){

    this.loadData = this.navParams.data;

    if(this.loadData.flag){
      console.log(this.loadData);
    }
    console.log(this.loadData);
    if(this.loadData.problem_image != '---'){
      this.imagesList = this.loadData.problem_image.split(",");
    }

  }


}
