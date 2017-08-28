import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DashboardModel } from "./dashboard.model";

/*
  Generated class for the DashboardServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DashboardServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DashboardServiceProvider Provider');
  }

  getDashboard(): Promise<DashboardModel> {
    return this.http.get('./assets/json/dashboard.json')
      .toPromise()
      .then(response => response.json() as DashboardModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
