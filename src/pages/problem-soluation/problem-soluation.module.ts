import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemSoluationPage } from './problem-soluation';

@NgModule({
  declarations: [
    ProblemSoluationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemSoluationPage),
  ],
  exports: [
    ProblemSoluationPage
  ]
})
export class ProblemSoluationPageModule {}
