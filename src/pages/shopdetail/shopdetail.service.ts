import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ShopModel } from "../shopdetail/shopdetail.model";
/*
  Generated class for the ShopdetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopdetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ShopdetailServiceProvider Provider');
  }
  // getData(shopid): Promise<ShopModel> {
  //   return this.http.get(Constants.URL + 'api/shopdetails/' + shopid)
  //     .toPromise()
  //     .then(response => response.json() as ShopModel)
  //     .catch(this.handleError);
  // }

  getData(): Promise<ShopModel> {
    return this.http.get('./assets/json/shopdetail.json')
      .toPromise()
      .then(response => response.json() as ShopModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
