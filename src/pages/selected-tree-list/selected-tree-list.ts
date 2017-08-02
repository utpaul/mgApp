import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";
import {API_CONFIG} from "../../constants/api";

@IonicPage()
@Component({
  selector: 'page-selected-tree-list',
  templateUrl: 'selected-tree-list.html',
})
export class SelectedTreeListPage {

  private loadedList =[];
  private imageUrl:any;
  private detailsListPage = 'DetailsListPage';

  constructor(private l2nHttp:L2nHttp) {
    this.imageUrl =API_CONFIG.misBase;
  }

  ionViewWillEnter() {

    this.loadedList =[];
    this.l2nHttp.getRequest('selected-tree-list','ডাটা লোড করা হচ্ছে...').then(
      data => {
        this.loadedList =data;
        console.log(this.loadedList);
      },
      err => {}
    );

  }

}
