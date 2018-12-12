import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PaymentPage } from '../payment/payment';
import { NfcReaderTestPage } from '../nfc-reader-test/nfc-reader-test';
import { TopupPage } from '../topup/topup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  YourFancyButton: any;
  YourFancyTopup: any;
  NfcReaderButton: any;
  money: any;

  payPage = PaymentPage;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.YourFancyButton = PaymentPage;
    this.YourFancyTopup = TopupPage;
    this.NfcReaderButton = NfcReaderTestPage;
    this.storage = storage;
    try{
      this.storage.get('money');
    } catch(e) {
      this.storageStart();
    }
    this.storage.get('money').then((val) => {
      this.money = val/100;
    });

  }

  public storageStart() {
      this.storage.set('money', 2000);
  }


  public async get() {

  }

}
