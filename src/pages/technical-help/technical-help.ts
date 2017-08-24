import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-technical-help',
  templateUrl: 'technical-help.html',
})
export class TechnicalHelpPage {

  tab1:any;
  tab2:any;

  constructor() {
    this.tab1='NewProblemPage';
    this.tab2='ProblemSoluationPage';
  }
}
