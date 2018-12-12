import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage = storage;
    this.storage.get('money').then((val) => {
      this.storage.set('money', val-355);
    });
    setTimeout(() => {
          // this.navCtrl.popToRoot();
          // might try this instead
          this.navCtrl.setRoot(SuccessPage);
      }, 1000);
  }

}
