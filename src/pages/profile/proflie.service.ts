import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ProfileModel } from "./profile.model";

/*
  Generated class for the ProflieServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProflieServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProflieServiceProvider Provider');
  }

  getUser(): Promise<ProfileModel> {
    return this.http.get('./assets/json/profile.json')
      .toPromise()
      .then(response => response.json() as ProfileModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
