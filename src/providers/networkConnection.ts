import {Injectable} from '@angular/core';
import {Platform, ToastController, Events} from "ionic-angular";
import {Network} from "@ionic-native/network";

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable()
export class NetworkConnectionProvider {

  public isOnline: boolean = true;
  private previousStatus;
  constructor(private network: Network,
              private  platform:Platform,
              private toastCtrl: ToastController,
              private eventCtrl: Events) {

    this.platform.ready().then(() => {
      this.previousStatus = ConnectionStatusEnum.Online;
      this.initializeNetworkEvents();
    });

  }

  displayNetworkUpdate(connectionState: string){

    let networkType = this.network.type;
    this.toastCtrl.create({
      message: 'You are now '+connectionState+ ' via '+networkType,
      duration: 3000
    }).present();

  }

  public initializeNetworkEvents(): void {

    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.eventCtrl.publish('network:offline');
        this.displayNetworkUpdate(this.network.type);
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
      this.isOnline = false;
    });

    this.network.onConnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.eventCtrl.publish('network:online');
        this.displayNetworkUpdate(this.network.type);
      }
      this.previousStatus = ConnectionStatusEnum.Online;
      this.isOnline = true;
    });
  }

}
