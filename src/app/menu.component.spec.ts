/**
 * SAMPLE TEST:
 *
 * This is a sample test for the menu component and should be removed / replaced.
 *
 */

import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuComponent } from './menu.component';

describe('Menu Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [
        IonicModule.forRoot(MenuComponent)
      ],
      providers: [
        StatusBar,
        SplashScreen
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(component instanceof MenuComponent).toBe(true);
  });

  it ('should have two pages', () => {
    expect(component.pages.length).toBe(2);
  });

});