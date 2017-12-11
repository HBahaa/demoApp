import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {

	flag:any = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
	startExplore(){
		this.navCtrl.parent.select(0);
	}

}
