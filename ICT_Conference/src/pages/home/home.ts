import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SearchPagePage } from '../search-page/search-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class home {

  constructor(public navCtrl: NavController) {
    
  }

    gotoSearch(){
      this.navCtrl.push(SearchPagePage);
    }    

}
