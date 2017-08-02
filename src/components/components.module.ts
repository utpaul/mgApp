import { NgModule } from '@angular/core';
import {Elastic} from "./elastic/elastic";
import {IonicModule} from "ionic-angular";
import {AudioInputComponent} from "./audio-input/audio-input";

@NgModule({
  declarations: [
    Elastic,
    AudioInputComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    Elastic,
    AudioInputComponent
  ]
})
export class ComponentsModule {

}
