import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
	flag:any = false;

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
		
	}

	someFunction(){
		this.flag = true;
		return this.flag;
	}
	backToExplore(){
		this.flag = false;
		return this.flag;
	}

}
