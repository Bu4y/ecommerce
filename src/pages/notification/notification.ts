import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NotificationsModel } from "./notification.model";
import { NotificationServiceProvider } from "./notification.service";

/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notifications: NotificationsModel = new NotificationsModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public notiService: NotificationServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.getData();
  }

  getData() {
    this.notiService.getNoti().then((data) => {
      this.notifications = data;
    }, (err) => {
      console.log(err);
    });
  }

}
