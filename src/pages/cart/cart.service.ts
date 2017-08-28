import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CartModel } from "./cart.model";

/*
  Generated class for the CartServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CartServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CartServiceProvider Provider');
  }

  getCartData(): Promise<CartModel> {
    return this.http.get('./assets/json/cart.json')
      .toPromise()
      .then(response => response.json() as CartModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
