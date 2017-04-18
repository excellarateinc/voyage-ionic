import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuComponent } from "./menu.component";
import { LoginModule } from "./authentication/login.module";

import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { AuthenticatedHttpService } from "./authentication/authenticated-http.service";
import { EnvironmentsModule } from "./environment-variables/environment-variables.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginModule,
    HttpModule,
    EnvironmentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthenticatedHttpService,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new AuthenticatedHttpService(backend, defaultOptions);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class AppModule {}
