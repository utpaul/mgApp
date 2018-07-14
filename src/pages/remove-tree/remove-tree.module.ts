import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveTreePage } from './remove-tree';

@NgModule({
  declarations: [
    RemoveTreePage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveTreePage),
  ],
  exports: [
    RemoveTreePage
  ]
})
export class RemoveTreePageModule {}
