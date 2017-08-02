import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemFormPage } from './problem-form';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProblemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemFormPage),
    ComponentsModule
  ],
  exports: [
    ProblemFormPage
  ]
})
export class ProblemFormPageModule {}
