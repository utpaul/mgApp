import {Component, OnInit} from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-details-list',
  templateUrl: 'details-list.html',
})
export class DetailsListPage implements OnInit{

  private loadedList :any;
  private imageUrl:any;

  constructor(public navParams: NavParams) {
    this.imageUrl =API_CONFIG.misBase;
  }

  ngOnInit(){

    this.loadedList = this.navParams.data;
    console.log(this.loadedList);
  }

}
