import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
          this.navCtrl.setRoot(SuccessPage);
      }, 2000);
  }

}
