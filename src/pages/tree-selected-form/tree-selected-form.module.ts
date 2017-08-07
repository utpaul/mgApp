import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeSelectedFormPage } from './tree-selected-form';

@NgModule({
  declarations: [
    TreeSelectedFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TreeSelectedFormPage),
  ],
  exports: [
    TreeSelectedFormPage
  ]
})
export class TreeSelectedFormPageModule {}
