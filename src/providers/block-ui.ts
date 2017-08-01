import {Injectable} from '@angular/core';
import {LoadingController, AlertController} from "ionic-angular";

@Injectable()
export class BlockUi {

  defaultContent = "Processing...";

  constructor(private loadingCtrl: LoadingController,
              private _alert: AlertController) {
  }

  show(msg) {
    let l = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: msg || this.defaultContent,
        cssClass:'customColor',
        dismissOnPageChange: true
      });

    l.present().then(x=>console.log());
    return l;
  }

  alert(msg, title) {
    let alert = this._alert.create({
      title: title,
      message: msg,
      buttons: ['Dismiss'],
      cssClass: "danger-alert"
    });

    alert.present().then(
      s => console.log(s),
      e => console.error(e)
    );
  }

  error(msg) {
    return this.alert(msg, "Error!!");
  }
}
