import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemFormPage } from './problem-form';
import {ComponentsModule} from "../../components/components.module";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    ProblemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemFormPage),
    ComponentsModule,
    PipesModule
  ],
  exports: [
    ProblemFormPage
  ]
})
export class ProblemFormPageModule {}
