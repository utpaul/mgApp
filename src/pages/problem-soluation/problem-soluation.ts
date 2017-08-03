import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";

@IonicPage()
@Component({
  selector: 'page-problem-soluation',
  templateUrl: 'problem-soluation.html',
})
export class ProblemSoluationPage {

  private loadedData =[];

  constructor(private l2nHttp:L2nHttp) {

  }

  ionViewDidEnter(){

    this.l2nHttp.getRequest('solution-lists','ডাটা লোড করা হচ্ছে...').then(
      data => {
        this.loadedData =data;
        console.log(this.loadedData);
      },
      err => {
        console.log(err);
      }
    );

  }

}
