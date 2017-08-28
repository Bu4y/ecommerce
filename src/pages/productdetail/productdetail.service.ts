import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ProductDetailModel } from "./productdetail.model";

/*
  Generated class for the ProductdetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductdetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductdetailServiceProvider Provider');
  }

  // getData(id): Promise<ProductDetailModel> {
  //   return this.http.get(Constants.URL + 'api/productdetail/' + id)
  //     .toPromise()
  //     .then(response => response.json() as ProductDetailModel)
  //     .catch(this.handleError);
  // }

  // addToCart(product): Promise<ProductDetailModel> {
  //   product.selecteduser = JSON.parse(window.localStorage.getItem('user'));
  //   return this.http.post(Constants.URL + 'api/manage-carts/add', product)
  //     .toPromise()
  //     .then(response => response.json() as ProductDetailModel)
  //     .catch(this.handleError);
  // }

  getData(): Promise<ProductDetailModel> {
    return this.http.get('./assets/json/productdetail.json')
      .toPromise()
      .then(response => response.json() as ProductDetailModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
