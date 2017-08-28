import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DashboardPage } from "../dashboard/dashboard";
import { SearchPage } from "../search/search";
import { CartPage } from "../cart/cart";
import { NotificationPage } from "../notification/notification";
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
@IonicPage()
export class TabnavPage {

  dashboardRoot = DashboardPage;
  searchRoot = SearchPage;
  cartRoot = CartPage;
  notificationRoot = NotificationPage;
  profileRoot = ProfilePage;


  constructor(public navCtrl: NavController) { }

}
