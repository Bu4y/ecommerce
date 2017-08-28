import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailPage } from './productdetail';

@NgModule({
  declarations: [
    ProductdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductdetailPage),
  ],
  exports: [
    ProductdetailPage
  ]
})
export class ProductdetailPageModule {}
