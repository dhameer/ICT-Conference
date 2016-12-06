import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { home } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class login {

  constructor(public navCtrl: NavController) {

  }

    login(){
      this.navCtrl.push(home);
    }  

}




