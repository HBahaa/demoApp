import { Component } from '@angular/core';
import { NavController, AlertController, Events, Platform, ModalController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  step: any;
  stepCondition: any;
  stepDefaultCondition: any;
  currentStep: any;
  month:any = '1990-02-19';
  first: any;
  last: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public evts: Events,
    private platform: Platform, private modalCtrl: ModalController) {
    /**
     * Step Wizard Settings
     */
    this.step = 1;//The value of the first step, always 1
    this.stepCondition = false;//Set to true if you don't need condition in every step
    this.stepDefaultCondition = this.stepCondition;//Save the default condition for every step
    //You can subscribe to the Event 'step:changed' to handle the current step
    this.evts.subscribe('step:changed', step => {
      //Handle the current step if you need
      this.currentStep = step[0];
      //Set the step condition to the default value
      this.stepCondition = this.stepDefaultCondition;
    });
    this.evts.subscribe('step:next', () => {
      //Do something if next
      console.log('Next pressed: ', this.currentStep);
    });
    this.evts.subscribe('step:back', () => {
      //Do something if back
      console.log('Back pressed: ', this.currentStep);
    });
  }

  onFinish() {
    this.alertCtrl.create({
      message: 'Wizard Finished!!',
      title: 'Congrats!!',
      buttons: [{
        text: 'Ok'
      }]
    }).present();
  }

  toggle() {
    this.stepCondition = !this.stepCondition;
  }

  getName() {
    if (this.first && this.first.trim() !== '' && this.last && this.last.trim() !== '') {
      this.stepCondition = true;
    } else {
      this.stepCondition = false;
    }
  }

  textChange(e) {
    if (e.target.value && e.target.value.trim() !== '') {
      this.stepCondition = true;
    } else {
      this.stepCondition = false;
    }
  }

  datetimeChange(){
    this.stepCondition = true;  
  }

  declineTerms(){
    this.stepCondition = false;
  }
  acceptTerms(){
    this.stepCondition = true; 
    this.navCtrl.setRoot(TabsPage);
  }

  presentLoginModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  exitApp(){
    this.platform.exitApp();
  }

}
