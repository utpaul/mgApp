import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, NavController} from 'ionic-angular';
import {API_CONFIG} from "../../constants/api";
import {L2nHttp} from "../../providers/l2n-http";

@IonicPage()
@Component({
  selector: 'page-details-list',
  templateUrl: 'details-list.html',
})

export class DetailsListPage implements OnInit{

  private loadedList :any;
  private imageUrl:any;

  constructor(public navParams: NavParams,
              private l2nHttp:L2nHttp,
              public navCtrl: NavController) {
    this.imageUrl =API_CONFIG.misBase;
  }

  ngOnInit(){
    this.loadedList = this.navParams.data;
    console.log(this.loadedList);
  }


  removeTree(treeId){
    this.l2nHttp.postRequest('selected-tree-remove',
      {id:treeId}, 'তথ্য অপসারণ হচ্ছে...').then(
      data => {
        console.log('success');
        this.navCtrl.pop();
      }, err => {
        console.log(err);
      }
    );
  }

}
