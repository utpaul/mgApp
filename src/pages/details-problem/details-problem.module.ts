import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsProblemPage } from './details-problem';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    DetailsProblemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsProblemPage),
    IonicImageViewerModule
  ],
  exports: [
    DetailsProblemPage
  ]
})
export class DetailsProblemPageModule {}
