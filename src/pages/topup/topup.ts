import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html'
})
export class TopupPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage = storage;
  }

  public TopUp10() {
    this.storage.get('money').then((val) => {
      this.storage.set('money', val+1000);
      this.done();
    });
  }

  public TopUp20() {
    this.storage.get('money').then((val) => {
      this.storage.set('money', val+2000);
      this.done();
    });
  }

  public TopUp30() {
    this.storage.get('money').then((val) => {
      this.storage.set('money', val+3000);
      this.done();
    });
  }

  public TopUp50() {
    this.storage.get('money').then((val) => {
      this.storage.set('money', val+5000);
      this.done();
    });
  }

  public done() {
    console.log("Done!");
    alert("Done!");
  }

}
