import { Component, ViewChild, Inject } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuComponent } from "./menu.component";
import { envVariables } from "./environment-variables/environment-variables.token";

@Component({
  template: '<ion-nav #baseNav></ion-nav>',
})
export class MyApp {
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, @Inject(envVariables) public envVariables) {
    this.initializeApp();
    console.log(envVariables);
  }

  ngOnInit() {
    this.nav.push(MenuComponent, { animate: false })
      .then(() => {
        this.splashScreen.hide();
      })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

    });
  }
}
