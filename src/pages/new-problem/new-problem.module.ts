import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProblemPage } from './new-problem';

@NgModule({
  declarations: [
    NewProblemPage,
  ],
  imports: [
    IonicPageModule.forChild(NewProblemPage),
  ],
  exports: [
    NewProblemPage
  ]
})
export class NewProblemPageModule {}
