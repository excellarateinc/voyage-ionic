import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

@Component({
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @ViewChild('content') nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Page One', component: HomePage },
      { title: 'Page Two', component: ListPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}