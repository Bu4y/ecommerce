import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { searchModel } from "./search.model";
import { SearchServiceProvider } from "./search.service";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  search: searchModel = new searchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: SearchServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.getSearch();
  }

  getSearch() {
    this.searchService.getSearch().then((data) => {
      this.search = data;
    });
  }

}
