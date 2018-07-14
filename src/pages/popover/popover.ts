import {Component} from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {USER_POPOVER_LIST} from "../../constants/popoverList";

@IonicPage()

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})

export class PopoverPage{

  private itemList=[];

  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController) {
    this.itemList =USER_POPOVER_LIST;
  }

  close(item) {
    this.viewCtrl.dismiss({action: item});
  }

}
