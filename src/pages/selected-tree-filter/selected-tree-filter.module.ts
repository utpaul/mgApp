import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedTreeFilterPage } from './selected-tree-filter';

@NgModule({
  declarations: [
    SelectedTreeFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedTreeFilterPage),
  ],
  exports: [
    SelectedTreeFilterPage
  ]
})
export class SelectedTreeFilterPageModule {}
