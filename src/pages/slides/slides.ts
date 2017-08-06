import { Component, ViewChild,
  trigger, transition, style, state, animate, keyframes } from '@angular/core';
import {IonicPage, NavController, Slides, Platform} from 'ionic-angular';
import {ScreenOrientation} from "@ionic-native/screen-orientation";

@IonicPage({
  name: 'page-slides',
  priority: 'high'
})


@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',

  animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ])))
    ])
  ]

})

export class SlidesPage {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = 'x';
  ListOfSlogan:any;
  loginPageLink='LoginPage';

  constructor(public navCtrl: NavController,
              private screenOrientation: ScreenOrientation,
              public platform: Platform) {

    this.platform.ready().then(() => {

      if(platform.is('core')){

      } else if(platform.is('android')){
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }

    });

    this.ListOfSlogan = [

      { heading: "ছাদবাগান ধারণা",
        para:"আমাদের ছাদবাগান পরিদর্শন করে ছাদবাগান তৈরির ধারণা নিতে পারেন।",
        icon:"md-analytics"
      },
      { heading: "ছাদবাগান প্রশিক্ষণ",
        para:"আমাদের রয়েছে তথ্যপ্রযুক্তি ভিত্তিক একদিনের ছাদবাগান প্রশিক্ষণের ব্যবস্থা।",
        icon:"md-people"
      },
      { heading: "ছাদবাগান সহায়তা",
        para:"ছাদবাগান তৈরির সকল প্রকার সহায়তা প্রদান",
        icon:"md-help-circle"
      },
      { heading: "ছাদবাগান উন্নয়ন",
        para:"ছাদবাগান উন্নয়নে আমাদের রয়েছে সক্রিয় ভূমিকা",
        icon:"md-bonfire"
      },
      { heading: "ছাদবাগান ব্যবস্থাপণা",
        para:"তথ্যপ্রযুক্তির মাধ্যমে ছাদবাগান ব্যবস্থাপণা করা হয়।",
        icon:"md-bookmarks"
      }
    ]

  }

  skip(){
    this.navCtrl.setRoot(this.loginPageLink);
  }

  slideChanged() {
    if (this.slides.isEnd()){
      this.skipMsg = "Alright, I got it";
      this.slides.lockSwipes(true);
      this.navCtrl.setRoot(this.loginPageLink);
    }
    else
      this.skipMsg = "Skip";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }


}
