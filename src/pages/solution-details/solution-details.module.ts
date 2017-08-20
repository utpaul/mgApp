import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionDetailsPage } from './solution-details';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    SolutionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SolutionDetailsPage),
    IonicImageViewerModule
  ],
  exports: [
    SolutionDetailsPage
  ]
})
export class SolutionDetailsPageModule {}
