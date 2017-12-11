import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonSimpleWizard } from '../pages/ion-simple-wizard/ion-simple-wizard.component';
import { IonSimpleWizardStep } from '../pages/ion-simple-wizard/ion-simple-wizard.step.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { SavedPage } from '../pages/saved/saved';
import { InboxPage } from '../pages/inbox/inbox';
import { TripsPage } from '../pages/trips/trips';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InboxPage,
    ProfilePage,
    SavedPage,
    TripsPage,
    ExplorePage,
    LoginPage,
    DetailsPage,
    HomePage,
    IonSimpleWizard,
    IonSimpleWizardStep
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InboxPage,
    ProfilePage,
    SavedPage,
    TripsPage,
    ExplorePage,
    LoginPage,
    DetailsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
