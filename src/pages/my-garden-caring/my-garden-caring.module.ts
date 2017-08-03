import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGardenCaringPage } from './my-garden-caring';

@NgModule({
  declarations: [
    MyGardenCaringPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGardenCaringPage),
  ],
  exports: [
    MyGardenCaringPage
  ]
})
export class MyGardenCaringPageModule {}
