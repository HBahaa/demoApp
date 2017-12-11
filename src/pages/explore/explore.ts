import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  	slides = [
	    {
	      title: "Homes",
	      image: "assets/img/bedroom.jpg",
	    },
	    {
	      title: "Experiences",
	      image: "assets/img/restaurant.jpeg",
	    },
	    {
	      title: "Restaurants",
	      image: "assets/img/sea.jpg",
	    }
	];

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	getItems(){

	}

	setDate(){

	}

	setGuests(){

	}

	moreDetails(){
		this.navCtrl.setRoot(DetailsPage);
	}

	someFunction(){
		
	}
	
}
