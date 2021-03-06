webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPage = (function () {
    function DetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DetailsPage.prototype.backToExplore = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/details/details.html"*/'<ion-header>\n\n	<button ion-button clear color="main" (click)="backToExplore()" icon-only>\n		<ion-icon name="arrow-round-back"></ion-icon>\n	</button>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card>\n		<img src="assets/img/restaurant.jpeg" />\n		<ion-card-content>\n		    <ion-card-title>\n		    	Nine Inch Nails Live\n	      	</ion-card-title>\n		    <p>\n		      The most popular industrial group ever\n		    </p>\n		    <button ion-button clear small icon-start color="main">\n				<ion-icon name=\'star\'></ion-icon>\n				<ion-icon name=\'star\'></ion-icon>\n				<ion-icon name=\'star\'></ion-icon>\n				<ion-icon name=\'star\'></ion-icon>\n				<ion-icon name=\'star\'></ion-icon> \n				<label>Reviews</label>\n			</button>\n	    </ion-card-content>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.getNotifications = function () {
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/profile/profile.html"*/'<ion-content padding>\n	<ion-item id="pic">\n	    <ion-avatar item-start>\n	      <img src="assets/img/1.png">\n	    </ion-avatar>\n	    <h2>Ahmed</h2>\n	    <p>View and edit profile</p>\n	</ion-item>\n	<ion-list>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="notifications" item-start></ion-icon>\n			Notifications\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="arrow-back" item-start></ion-icon>\n			Travel for work?\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="card" item-start></ion-icon>\n			Credits & Coupons\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="people" item-start></ion-icon>\n			Invite Friends\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="cash" item-start></ion-icon>\n			Payments\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="settings" item-start></ion-icon>\n			Settings\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="help" item-start></ion-icon>\n			Get help\n		</button>\n		<button ion-item (click)="getNotifications()">\n			<ion-icon name="send" item-start></ion-icon>\n			Give us feedback\n		</button>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedPage = (function () {
    function SavedPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.savedList = [];
    }
    SavedPage.prototype.startExplore = function () {
        // this.navCtrl.parent.select(0);
        this.app.getRootNav().getActiveChildNav().select(0);
    };
    SavedPage.prototype.checkSavedList = function () {
        if (this.savedList.length > 0) {
            return false;
        }
        return true;
    };
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/saved/saved.html"*/'<ion-content padding>\n	<div *ngIf="checkSavedList()">\n		<h2>Saved</h2>\n		<p>\n			when you see something you like, tap on the heart to save it.\n		</p>\n		<button ion-button clear color="main" (click)="startExplore()">Start Explore</button>\n	</div>\n	<div *ngIf="flag">\n		<h2>Saved</h2>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/saved/saved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InboxPage = (function () {
    function InboxPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxPage');
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inbox',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/inbox/inbox.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>inbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/inbox/inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripsPage = (function () {
    function TripsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flag = false;
    }
    TripsPage.prototype.startExplore = function () {
        this.navCtrl.parent.select(0);
    };
    TripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trips',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/trips/trips.html"*/'<ion-content *ngIf="!flag" padding text-center class="vertical-align-content">\n	<div>\n		<h2>What will be your first adventure?</h2>\n		<p id="bicycle">\n			<ion-icon name="bicycle"></ion-icon>\n		</p>\n		<button ion-button outline color="main" (click)="startExplore()">Start Explore</button>\n	</div>\n</ion-content>\n<ion-content *ngIf="flag">\n	<h2>True</h2>\n</ion-content>\n\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/trips/trips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TripsPage);
    return TripsPage;
}());

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExplorePage = (function () {
    function ExplorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
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
    }
    ExplorePage.prototype.getItems = function () {
    };
    ExplorePage.prototype.setDate = function () {
    };
    ExplorePage.prototype.setGuests = function () {
    };
    ExplorePage.prototype.moreDetails = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */]);
    };
    ExplorePage.prototype.someFunction = function () {
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/explore/explore.html"*/'<ion-header>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-buttons start>\n      <button ion-button id="dates" color="light" (click)="setDate()">All Dates</button>\n      <button ion-button color="light" (click)="setGuests()">Guests</button>\n    </ion-buttons>\n</ion-header>\n\n<ion-content padding>\n	<h3>Explore Airbnb</h3>\n	<ion-slides pager>\n	    <ion-slide *ngFor="let slide of slides"  (click)="someFunction()">\n	      <img [src]="slide.image" class="slide-image"/>\n	      <h5 class="slide-title" [innerHTML]="slide.title"></h5>\n	    </ion-slide>\n\n	</ion-slides>\n	<h3>Experiences</h3>\n	<ion-row>\n		<ion-col col-6>\n			<ion-card (click)="moreDetails()">\n				<img src="assets/img/restaurant.jpeg" />\n				<ion-card-content>\n				    <ion-card-title>\n				    	Nine Inch Nails Live\n			      	</ion-card-title>\n				    <p>\n				      The most popular industrial group ever\n				    </p>\n				    <button ion-button clear small icon-start color="main">\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon color="light" name=\'star\'></ion-icon> \n						<label>Reviews</label>\n					</button>\n			    </ion-card-content>\n				<!-- <ion-row no-padding>\n					<ion-col>\n						<button ion-button clear small icon-start>\n							<ion-icon name=\'star\'></ion-icon>\n							<ion-icon name=\'star\'></ion-icon>\n							<ion-icon name=\'star\'></ion-icon>\n							<ion-icon name=\'star\'></ion-icon>\n							<ion-icon name=\'star\'></ion-icon> \n							Reviews\n						</button>\n					</ion-col>\n				</ion-row> -->\n			</ion-card>\n		</ion-col>\n		<ion-col col-6>\n			<ion-card>\n				<img src="assets/img/restaurant.jpeg" />\n				<ion-card-content>\n				    <ion-card-title>\n				    	Nine Inch Nails Live\n			      	</ion-card-title>\n				    <p>\n				      The most popular industrial group ever\n				    </p>\n				    <button ion-button clear small icon-start color="main">\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon> \n						<label>Reviews</label>\n					</button>\n			    </ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n	<ion-row>\n		<button ion-button block color="main">Show All</button>\n	</ion-row>\n	<h3>Homes</h3>\n	<ion-row>\n		<ion-col col-6>\n			<ion-card>\n				<img src="assets/img/bedroom.jpg" />\n				<ion-card-content>\n				    <ion-card-title>\n				    	Nine Inch Nails Live\n			      	</ion-card-title>\n				    <p>\n				      The most popular industrial group ever\n				    </p>\n				    <button ion-button clear small icon-start color="main">\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon> \n						<label>Reviews</label>\n					</button>\n			    </ion-card-content>\n			</ion-card>\n		</ion-col>\n		<ion-col col-6>\n			<ion-card>\n				<img src="assets/img/bedroom.jpg" />\n				<ion-card-content>\n				    <ion-card-title>\n				    	Nine Inch Nails Live\n			      	</ion-card-title>\n				    <p>\n				      The most popular industrial group ever\n				    </p>\n				    <button ion-button clear small icon-start  color="main">\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon>\n						<ion-icon name=\'star\'></ion-icon> \n						<label>Reviews</label>\n					</button>\n			    </ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n	<ion-row>\n		<button ion-button color="main" block>Show All</button>\n	</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/explore/explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    LoginPage.prototype.userLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.dismissLoginModal = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/login/login.html"*/'<ion-header>\n\n  <button ion-button clear id="close" color="main" (click)="dismissLoginModal()" icon-only><ion-icon name="close"></ion-icon></button>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form #loginForm="ngForm" (ngSubmit)="userLogin()">\n      <ion-row>\n        <ion-col>\n          <h3>Login</h3>\n          <ion-list inset>\n            <ion-item>\n            	<ion-label stacked>Name</ion-label>\n              	<ion-input type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n\n            <button ion-button type="submit" color="main" block [disabled]="!loginForm.form.valid">\n              <ion-icon name="log-in"></ion-icon> login\n          	</button>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n	\n</ion-content>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		286,
		6
	],
	"../pages/explore/explore.module": [
		287,
		5
	],
	"../pages/inbox/inbox.module": [
		288,
		4
	],
	"../pages/login/login.module": [
		289,
		3
	],
	"../pages/profile/profile.module": [
		290,
		2
	],
	"../pages/saved/saved.module": [
		291,
		1
	],
	"../pages/trips/trips.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, evts, platform, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.evts = evts;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.month = '1990-02-19';
        /**
         * Step Wizard Settings
         */
        this.step = 1; //The value of the first step, always 1
        this.stepCondition = false; //Set to true if you don't need condition in every step
        this.stepDefaultCondition = this.stepCondition; //Save the default condition for every step
        //You can subscribe to the Event 'step:changed' to handle the current step
        this.evts.subscribe('step:changed', function (step) {
            //Handle the current step if you need
            _this.currentStep = step[0];
            //Set the step condition to the default value
            _this.stepCondition = _this.stepDefaultCondition;
        });
        this.evts.subscribe('step:next', function () {
            //Do something if next
            console.log('Next pressed: ', _this.currentStep);
        });
        this.evts.subscribe('step:back', function () {
            //Do something if back
            console.log('Back pressed: ', _this.currentStep);
        });
    }
    HomePage.prototype.onFinish = function () {
        this.alertCtrl.create({
            message: 'Wizard Finished!!',
            title: 'Congrats!!',
            buttons: [{
                    text: 'Ok'
                }]
        }).present();
    };
    HomePage.prototype.toggle = function () {
        this.stepCondition = !this.stepCondition;
    };
    HomePage.prototype.getName = function () {
        if (this.first && this.first.trim() !== '' && this.last && this.last.trim() !== '') {
            this.stepCondition = true;
        }
        else {
            this.stepCondition = false;
        }
    };
    HomePage.prototype.textChange = function (e) {
        if (e.target.value && e.target.value.trim() !== '') {
            this.stepCondition = true;
        }
        else {
            this.stepCondition = false;
        }
    };
    HomePage.prototype.datetimeChange = function () {
        this.stepCondition = true;
    };
    HomePage.prototype.declineTerms = function () {
        this.stepCondition = false;
    };
    HomePage.prototype.acceptTerms = function () {
        this.stepCondition = true;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.presentLoginModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    HomePage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/home/home.html"*/'<ion-content>\n  <ion-simple-wizard [(step)]="step" [showSteps]="false" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard">\n        <ion-card-header>\n          <button ion-button clear id="close" color="light" (click)="exitApp()" icon-only><ion-icon name="close"></ion-icon></button>\n          <button ion-button clear  class="login" color="light" (click)="presentLoginModal()">Login</button>\n        </ion-card-header>\n        <ion-icon class="card-wizard-icon" name="ionic" color="light"></ion-icon>\n        <ion-card-content>\n          <ion-card-title>\n            Welcome to Airbnb\n          </ion-card-title>\n          <button ion-button block color="light" round icon-start large class="fbIcon" >\n            <ion-icon name="logo-facebook"></ion-icon>Continue with Facebook\n          </button>\n          <button ion-button block color="light" large round outline (click)="toggle()">\n            Create Account\n          </button>\n          <button ion-button block color="light" large round outline>More Options</button>\n          <!-- <p id="note">\n            By tapping Continue\n          </p> -->\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard">\n        <ion-card-content>\n          <ion-card-title class="cardTitle">\n            What is your name?\n          </ion-card-title>\n          <!-- <form> -->\n            <ion-list>\n              <ion-item>\n                <ion-label stacked>First Name</ion-label>\n                <ion-input name="frist" (change)="getName()" [(ngModel)]="first" type="text"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>Last Name</ion-label>\n                <ion-input name="last" (change)="getName()" [(ngModel)]="last" type="text"></ion-input>\n              </ion-item>\n            </ion-list>\n          <!-- </form> -->\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard">\n        <ion-card-content>\n          <ion-card-title class="cardTitle">\n            And, your email?\n          </ion-card-title>\n          <ion-list>\n            <ion-item>\n              <ion-label stacked>Email Address</ion-label>\n              <ion-input (input)="textChange($event)" type="email"></ion-input>\n            </ion-item>\n            <ion-item id="tglbtn">\n              <ion-toggle checked="false"></ion-toggle>\n              <ion-label>I\'d like to receive promotional communications, incluuding discounts, Surveys, inspirations, and love from Airbnb</ion-label>\n            </ion-item>\n          </ion-list>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard">\n        <ion-card-content>\n          <ion-card-title class="cardTitle">\n            Create a password\n          </ion-card-title>\n          <p>\n            Your password must contains \n          </p>\n          <ion-list>\n            <ion-item>\n              <ion-label stacked>Password</ion-label>\n              <ion-input (input)="textChange($event)" type="password"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard">\n        <ion-card-content>\n          <ion-card-title class="cardTitle">\n            When is your birthday?\n          </ion-card-title>\n          <p>\n            You must be at least 18 years old to use Airbnb\n          </p>\n          <ion-list>\n            <ion-item>\n              <ion-label>Start Date</ion-label>\n              <ion-datetime displayFormat="MMM DD YYYY" (ionChange)="datetimeChange()" [(ngModel)]="month"></ion-datetime>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n    <ion-wizard-step>\n      <ion-card class="card-wizard" id="finalStep">\n        <ion-card-content>\n          <ion-card-title>\n            before you join\n          </ion-card-title>\n          <p>\n            Whether it\'s your first time using Airbnb or you\'re one of our original travelers, please commit to respecting and including everyonein the Airbnb community.\n          </p>\n          <button ion-button round (click)="acceptTerms()">Accept</button>\n          <button ion-button round outline (click)="declineTerms()">Decline</button>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-wizard-step>\n\n  </ion-simple-wizard>\n\n</ion-content>'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { Keyboard } from '@ionic-native/keyboard';*/


var IonSimpleWizard = (function () {
    function IonSimpleWizard(evts) {
        this.evts = evts;
        this.finishIcon = 'send'; //Default
        this.showSteps = true; //Default
        this.step = 1; //Default
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.stepChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.steps = 0; //Innitial
        this.hideWizard = false; //Default
        this.stepCondition = true; //Default
    }
    IonSimpleWizard.prototype.ngOnInit = function () {
        /**
         * Hide the wizard buttons when the keyboard is open
         */
        /*this.keyboard.onKeyboardShow().subscribe(() => {
          this.hideWizard = true;
        });
        this.keyboard.onKeyboardHide().subscribe(() => {
          this.hideWizard = false;
        })*/
    };
    /**
     * @return {number} New Steps
     */
    IonSimpleWizard.prototype.addStep = function () {
        var newSteps = this.steps + 1;
        this.steps = newSteps;
        return newSteps;
    };
    /**
     * @return {boolean} true if is the final step
     */
    IonSimpleWizard.prototype.isOnFinalStep = function () {
        return this.step === this.steps;
    };
    /**
     * @return {boolean} the current step condition
     */
    IonSimpleWizard.prototype.getCondition = function () {
        return this.stepCondition;
    };
    /**
     * @return {boolean} true if the the step is the first
     */
    IonSimpleWizard.prototype.isOnFirstStep = function () {
        if (this.step == this.steps) {
            return false;
        }
        return this.step === 1;
    };
    /**
     * @method back button event and emit Event Called 'step:back'
     */
    IonSimpleWizard.prototype.back = function () {
        this.stepChange.emit(this.step - 1);
        this.evts.publish('step:back');
    };
    /**
     * @method next button event and emit  Event Called 'step:next'
     */
    IonSimpleWizard.prototype.next = function () {
        this.stepChange.emit(this.step + 1);
        this.evts.publish('step:next');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finishIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonSimpleWizard.prototype, "showSteps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepCondition", void 0);
    IonSimpleWizard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-simple-wizard',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/ion-simple-wizard/ion-simple-wizard.component.html"*/'<ng-content></ng-content>\n<ion-footer [hidden]="hideWizard">\n  <div class="ion-wizard-footer">\n    <!--Back Button-->\n    <ion-fab [@btnState] *ngIf="!isOnFirstStep()" left bottom>\n      <button ion-fab (click)="back()">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-fab>\n    \n    <!--Steps count-->   \n    <ion-badge *ngIf="showSteps">{{step}} / {{steps}}</ion-badge>\n    <!--Next Button-->\n    <ion-fab [@btnState] *ngIf="(!isOnFinalStep() && getCondition())" right bottom>\n      <button ion-fab (click)="next()">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-fab>\n    <!--Finish Button-->\n    <ion-fab [@btnState] *ngIf="(isOnFinalStep() && getCondition())" right bottom>\n      <button ion-fab (click)="finish.emit(step + 1)">\n        <ion-icon [name]="finishIcon"></ion-icon>\n      </button>\n    </ion-fab>\n  </div> \n</ion-footer>'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/ion-simple-wizard/ion-simple-wizard.component.html"*/,
            animations: __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__["a" /* WizardAnimations */].btnRotate
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], IonSimpleWizard);
    return IonSimpleWizard;
}());

//# sourceMappingURL=ion-simple-wizard.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var WizardAnimations = (function () {
    function WizardAnimations() {
    }
    //Buttons Animations
    WizardAnimations.btnZoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'scale(1)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)' }))
            ])
        ])
    ];
    WizardAnimations.btn_none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.btnflipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('100ms 400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.btnRotate = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1 })
                ]))
            ])
        ])
    ];
    //Steps Animations
    WizardAnimations.carruselRight = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateX(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ];
    WizardAnimations.zoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'scale(1)', top: 0 }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)', top: 0 }))
            ])
        ])
    ];
    WizardAnimations.none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.carruselLeft = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselBottom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateY(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateY(100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselTop = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateY(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.flipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.flipX = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    return WizardAnimations;
}());

//# sourceMappingURL=ion-simple-wizard-animations.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ion_simple_wizard_ion_simple_wizard_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ion_simple_wizard_ion_simple_wizard_step_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_trips_trips__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_details_details__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ion_simple_wizard_ion_simple_wizard_component__["a" /* IonSimpleWizard */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ion_simple_wizard_ion_simple_wizard_step_component__["a" /* IonSimpleWizardStep */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saved/saved.module#SavedPageModule', name: 'SavedPage', segment: 'saved', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trips/trips.module#TripsPageModule', name: 'TripsPage', segment: 'trips', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trips_trips__["a" /* TripsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizardStep; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonSimpleWizardStep = (function () {
    function IonSimpleWizardStep(parent, evts) {
        var _this = this;
        this.parent = parent;
        this.evts = evts;
        this.step = this.parent.addStep();
        this.isCurrent = this.step === this.parent.step;
        this.parent.stepChange.subscribe(function (step) {
            _this.isCurrent = _this.step === step;
            if (_this.isCurrent) {
                _this.evts.publish('step:changed', _this.step);
            }
        });
    }
    IonSimpleWizardStep = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-wizard-step',
            host: {
                '[@WizardAnimations]': 'isCurrent ?"enter":"leave"'
            },
            template: "\n    <ng-content></ng-content>\n  ",
            animations: __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__["a" /* WizardAnimations */].carruselLeft //TO DO: Change the animation by @Input for example
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__["a" /* IonSimpleWizard */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], IonSimpleWizardStep);
    return IonSimpleWizardStep;
}());

//# sourceMappingURL=ion-simple-wizard.step.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_saved__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_inbox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trips_trips__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explore_explore__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabsPage = (function () {
    function TabsPage() {
        this.profilePage = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.savedPage = __WEBPACK_IMPORTED_MODULE_2__saved_saved__["a" /* SavedPage */];
        this.inboxPage = __WEBPACK_IMPORTED_MODULE_3__inbox_inbox__["a" /* InboxPage */];
        this.tripsPage = __WEBPACK_IMPORTED_MODULE_4__trips_trips__["a" /* TripsPage */];
        this.explorePage = __WEBPACK_IMPORTED_MODULE_5__explore_explore__["a" /* ExplorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="explorePage" tabTitle="Explore" tabIcon="search"></ion-tab>\n	<ion-tab [root]="profilePage" tabTitle="Profile" tabIcon="person"></ion-tab>\n	<ion-tab [root]="savedPage" tabTitle="Saved" tabIcon="heart-outline"></ion-tab>\n	<ion-tab [root]="inboxPage" tabTitle="Inbox" tabIcon="chatbubbles"></ion-tab>\n	<ion-tab [root]="tripsPage" tabTitle="Trips" tabIcon="md-globe"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/heba/Downloads/ionic2Apps/demoApp/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map