import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShopModel } from "./shopdetail.model";
import { ShopdetailServiceProvider } from "./shopdetail.service";

/**
 * Generated class for the ShopdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopdetail',
  templateUrl: 'shopdetail.html',
})
export class ShopdetailPage {
  shopDetail: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopdetailService: ShopdetailServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopdetailPage');
    this.getShopDetail();
  }

  getShopDetail() {
    this.shopdetailService.getData().then((data) => {
      this.shopDetail = data;
    });
  }

}
