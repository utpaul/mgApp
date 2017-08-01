import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GardenCaringPage } from './garden-caring';

@NgModule({
  declarations: [
    GardenCaringPage,
  ],
  imports: [
    IonicPageModule.forChild(GardenCaringPage),
  ],
  exports: [
    GardenCaringPage
  ]
})
export class GardenCaringPageModule {}
