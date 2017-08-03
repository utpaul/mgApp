import {Component, OnInit} from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {L2nHttp} from "../../providers/l2n-http";

@IonicPage()
@Component({
  selector: 'page-audio-play',
  templateUrl: 'audio-play.html',
})
export class AudioPlayPage implements OnInit{

  myTracks: any[];
  public tracks:any[] = [{src:'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3', title:''}];
  constructor(private l2nHttp:L2nHttp,
              public navParams: NavParams) {
  }

  ngOnInit(){

    let formData = this.navParams.data;

    console.log(formData);

  }


  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }


}
