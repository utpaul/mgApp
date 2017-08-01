import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeSelectPage } from './tree-select';

@NgModule({
  declarations: [
    TreeSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(TreeSelectPage),
  ],
  exports: [
    TreeSelectPage
  ]
})
export class TreeSelectPageModule {}
