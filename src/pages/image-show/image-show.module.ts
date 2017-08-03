import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageShowPage } from './image-show';

@NgModule({
  declarations: [
    ImageShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageShowPage),
  ],
  exports: [
    ImageShowPage
  ]
})
export class ImageShowPageModule {}
