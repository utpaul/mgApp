import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageShowPage } from './image-show';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    ImageShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageShowPage),
    IonicImageViewerModule
  ],
  exports: [
    ImageShowPage
  ]
})
export class ImageShowPageModule {}
