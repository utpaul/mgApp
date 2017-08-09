import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionDetailsPage } from './solution-details';

@NgModule({
  declarations: [
    SolutionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SolutionDetailsPage),
  ],
  exports: [
    SolutionDetailsPage
  ]
})
export class SolutionDetailsPageModule {}
