import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfileModel } from "./profile.model";
import { ProflieServiceProvider } from "./proflie.service";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: ProfileModel = new ProfileModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProflieServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getUser();
  }

  getUser() {
    this.profileService.getUser().then((data) => {
      this.profile = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
