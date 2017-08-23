import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-details-problem',
  templateUrl: 'details-problem.html',
})
export class DetailsProblemPage implements OnInit{

  private loadData:any;
  private imageUrl:any;
  private imagesList:Array<string>;
  private recordedFileUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.imageUrl =API_CONFIG.misBase2;
    this.recordedFileUrl = API_CONFIG.misBase3;
  }


  ngOnInit(){

    this.loadData = this.navParams.data;

    if(this.loadData.image != '---'){
        this.imagesList = this.loadData.image.split(",");
    }

    console.log(this.loadData);
  }

}
