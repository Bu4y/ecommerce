import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { NotificationsModel } from "./notification.model";


/*
  Generated class for the NotificationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NotificationServiceProvider {

  constructor(public http: Http) {
    console.log('Hello NotificationServiceProvider Provider');
  }

  getNoti(): Promise<NotificationsModel> {
    return this.http.get('./assets/json/notification.json')
      .toPromise()
      .then(response => response.json() as NotificationsModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
