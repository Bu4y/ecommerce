import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductDetailModel } from "./productdetail.model";
import { ProductdetailServiceProvider } from "./productdetail.service";

/**
 * Generated class for the ProductdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-productdetail',
  templateUrl: 'productdetail.html',
})
export class ProductdetailPage {
  productData: ProductDetailModel = new ProductDetailModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public productdetailService: ProductdetailServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailPage');
    this.productdetailService.getData().then((data) => {
      this.productData = data;
    });
  }

  selectSize(size) {
    // this.productData.selectedsize = size;
    // console.log(this.productData);
  }

  addToCart(product) {
    // if (product.issize && !this.productData.selectedsize) {
    //   alert('Please select size.');
    //   return false;
    // }

    // let user = JSON.parse(window.localStorage.getItem('user'));
    // if (user) {
    //   this.productService.addToCart(product).then((data) => {
    //     this.nav.push(CartPage)
    //   }, (error) => {
    //     console.error(error);
    //   });
    // } else {
    //   this.nav.push(LoginPage);
    // }

  }


}
