import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = TabsPage;

  constructor(platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#0095d8');
      this.splashScreen.hide();

    });

  }

  

}
