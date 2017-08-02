import { NgModule } from '@angular/core';
import {Elastic} from "./elastic/elastic";
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [
    Elastic
  ],
  imports: [
    IonicModule
  ],
  exports: [
    Elastic
  ]
})
export class ComponentsModule {

}
