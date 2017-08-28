import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartModel } from "./cart.model";
import { CartServiceProvider } from "./cart.service";

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart: CartModel = new CartModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.getCart();
  }

  getCart() {
    this.cartService.getCartData().then((data) => {
      this.cart = data;
    }, (err) => {
      console.log(err);
    });
  }

}
