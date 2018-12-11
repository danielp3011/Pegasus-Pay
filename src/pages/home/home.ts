import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  YourFancyButton: any;

  payPage = PaymentPage;

  constructor(public navCtrl: NavController) {
    this.YourFancyButton = PaymentPage;
  }

}
