import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {
  YourFancyButton: any;

  constructor(public navCtrl: NavController) {
    this.YourFancyButton = HomePage;

  }

}
