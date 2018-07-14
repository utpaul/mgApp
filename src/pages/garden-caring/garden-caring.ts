import { Component} from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-garden-caring',
  templateUrl: 'garden-caring.html',
})
export class GardenCaringPage {

  private loadedList =[];
  private imageUrl:any;
  myGardenCaringPage =  'MyGardenCaringPage';
  constructor(private l2nHttp:L2nHttp) {

    this.imageUrl =API_CONFIG.misBase;
  }

  ionViewDidEnter(){
    this.loadedList =[];
    this.l2nHttp.getRequest('my-garden-caring','তথ্য আহরিত হচ্ছে...').then(
      data => {
        this.loadedList =data;
        for(let i=0; i<this.loadedList.length;i++){

          this.loadedList[i].eachTreeService =this.loadedList[i].children.length;

        }

        console.log(this.loadedList);
      },

      err => {
        console.log(err);
      }
    );

  }

  toggleSection(i) {
    this.loadedList[i].open = !this.loadedList[i].open;
  }

}
