import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGardenCaringPage } from './my-garden-caring';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    MyGardenCaringPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGardenCaringPage),
    ComponentsModule,
  ],
  exports: [
    MyGardenCaringPage
  ]
})
export class MyGardenCaringPageModule {}
