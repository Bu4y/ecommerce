import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopdetailPage } from './shopdetail';

@NgModule({
  declarations: [
    ShopdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopdetailPage),
  ],
  exports: [
    ShopdetailPage
  ]
})
export class ShopdetailPageModule {}
