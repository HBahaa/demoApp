import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';

@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

	savedList: any = [];
	

	constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
	}

	startExplore(){
		// this.navCtrl.parent.select(0);
		this.app.getRootNav().getActiveChildNav().select(0);
	}
	checkSavedList() {
		if (this.savedList.length > 0) {
		  return false;
		}
		return true;
	}
}
