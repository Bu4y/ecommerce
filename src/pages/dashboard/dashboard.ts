import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DashboardModel } from "../dashboard/dashboard.model";
import { DashboardServiceProvider } from "../dashboard/dashboard.service";
import { ProductdetailPage } from "../productdetail/productdetail";
import { ShopdetailPage } from "../shopdetail/shopdetail";

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  dashboard: DashboardModel = new DashboardModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public dashService: DashboardServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.getData();
  }

  getData() {
    this.dashService.getDashboard().then((data) => {
      this.dashboard = data;
    }, (err) => {
      console.log(err);
    });
  }

  openPageShopList() {

  }

  openPageProductList() {

  }

  gotoShopDetail() {
    this.navCtrl.push(ShopdetailPage);
  }

  gotoDetail() {
    this.navCtrl.push(ProductdetailPage);
  }

}
