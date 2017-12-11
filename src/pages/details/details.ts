import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

	constructor(public navCtrl: NavController) {
	}

	backToExplore(){
		this.navCtrl.setRoot(TabsPage);
	}

}
