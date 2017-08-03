import { Component,OnInit } from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-image-show',
  templateUrl: 'image-show.html',
})
export class ImageShowPage implements OnInit {

  private imageUrl:any;
  private id:any;
  private images:any;
  constructor(public navParams: NavParams,
              private l2nHttp:L2nHttp,
              public navCtrl: NavController) {
    this.imageUrl =API_CONFIG.misBase2;
  }

  ngOnInit(){
    this.id = this.navParams.get('id');
    let formData = this.navParams.data;

    this.l2nHttp.postRequest('photo-getting',formData, 'প্রতীক্ষা করুন...').then(
      data => {
        this.images =data;
      }, err => {
        console.log(err);
      }
    );
  }

}
