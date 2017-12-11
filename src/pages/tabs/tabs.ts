import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { SavedPage } from '../saved/saved';
import { InboxPage } from '../inbox/inbox';
import { TripsPage } from '../trips/trips';
import { ExplorePage } from '../explore/explore';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profilePage = ProfilePage;
  savedPage = SavedPage;
  inboxPage = InboxPage;
  tripsPage = TripsPage;
  explorePage = ExplorePage;
}
