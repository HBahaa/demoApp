import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	constructor(public navCtrl: NavController,private viewCtrl: ViewController ) {
	}

	userLogin(){
		this.navCtrl.setRoot(TabsPage)
	}

	dismissLoginModal(){
		this.viewCtrl.dismiss();
	}


}
