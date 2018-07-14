import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-tree-select',
  templateUrl: 'tree-select.html',
})

export class TreeSelectPage {

  public searchElement ={type:' ', season:' '};
  private loadedList =[];
  private imageUrl:any;
  public selectedLoadedList =[];
  private detailsListPage = 'DetailsListPage';

  constructor(private l2nHttp:L2nHttp,
              private navCtrl: NavController,
              public viewCtrl: ViewController) {
    this.imageUrl =API_CONFIG.misBase;
  }

  submitValue(){

    this.loadedList =[];
    this.l2nHttp.postRequest('fruit-search',this.searchElement,'তথ্য আহরিত হচ্ছে...').then(
      data => {
        this.loadedList =data;
        console.log(this.loadedList);
        for(var j=0; j<this.loadedList.length;j++){

            if(this.loadedList[j].flag == '1'){
              this.selectedLoadedList.push(this.loadedList[j]);
            }
        }

      },
      err => {}
    );

  }

  addToSelectedList(i){
    this.navCtrl.push('TreeSelectedFormPage',this.loadedList[i]);
  }

}
