import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnicalHelpPage } from './technical-help';

@NgModule({
  declarations: [
    TechnicalHelpPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnicalHelpPage),
  ],
  exports: [
    TechnicalHelpPage
  ]
})
export class TechnicalHelpPageModule {}
