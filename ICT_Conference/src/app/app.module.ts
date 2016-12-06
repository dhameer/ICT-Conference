import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { login } from '../pages/login/login';
import { home } from '../pages/home/home';
import { conference } from '../pages/conference/conference';
import { SearchPagePage } from '../pages/search-page/search-page';

@NgModule({
  declarations: [
    MyApp,
    login,
    home,
    conference,
    SearchPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    login,
    home,
    conference,
    SearchPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
