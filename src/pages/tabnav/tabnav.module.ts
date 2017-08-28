import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabnavPage } from './tabnav';
import { DashboardPage } from '../dashboard/dashboard';

@NgModule({
  declarations: [
    TabnavPage,
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TabnavPage),
  ]
})
export class TabnavPageModule {}
