import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelpfulGardenPage } from './helpful-garden';

@NgModule({
  declarations: [
    HelpfulGardenPage,
  ],
  imports: [
    IonicPageModule.forChild(HelpfulGardenPage),
  ],
  exports: [
    HelpfulGardenPage
  ]
})
export class HelpfulGardenPageModule {}
