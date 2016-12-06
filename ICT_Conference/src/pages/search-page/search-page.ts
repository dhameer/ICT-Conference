import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-page',
  templateUrl: 'search-page.html'
})
export class SearchPagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SearchPagePage Page');
  }

}
