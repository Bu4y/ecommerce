import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListComponent } from './list';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListComponent
  ]
})
export class ListComponentModule {}
