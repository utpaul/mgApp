import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedTreeListPage } from './selected-tree-list';

@NgModule({
  declarations: [
    SelectedTreeListPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedTreeListPage),
  ],
  exports: [
    SelectedTreeListPage
  ]
})
export class SelectedTreeListPageModule {}
