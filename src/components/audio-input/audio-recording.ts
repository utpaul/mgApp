import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

class Timer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean = false;
  hasStarted: boolean = false;
  hasFinished: boolean=false;
  displayTime: string;

  constructor(second:number){
    this.seconds = this.secondsRemaining = second || 0;
  }
}

@Component({
  templateUrl: 'audio-input-model.html',
  selector: 'audio-input-model'
})
export class AudioRecordingModal {

  private timeInSeconds: number;
  private timer:Timer;

  constructor( public viewCtrl: ViewController, params: NavParams) {
    this.timeInSeconds = params.get("second");
  }

  ngOnInit() {
    if(!this.timeInSeconds) { this.timeInSeconds = 0; }
    this.initTimer();
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  private initTimer() {
    this.timer = new Timer(this.timeInSeconds);
    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    let sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    let hoursString, minutesString, secondsString;
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
        this.dismiss(null);
      }
    }, 1000);
  }

  stop() {
    this.timer.runTimer = false;
    this.dismiss('stop');
  }

  dismiss(action:any) {
    return this.viewCtrl.dismiss(action);
  }
}
