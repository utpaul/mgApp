import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminProblemFormPage } from './admin-problem-form';
import {IonicImageViewerModule} from "ionic-img-viewer";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    AdminProblemFormPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminProblemFormPage),
    ComponentsModule,
    IonicImageViewerModule
  ],
  exports: [
    AdminProblemFormPage
  ]
})
export class AdminProblemFormPageModule {}
