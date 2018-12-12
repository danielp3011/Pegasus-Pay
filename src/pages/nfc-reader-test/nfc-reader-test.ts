import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nfc-reader-test',
  templateUrl: 'nfc-reader-test.html'
})
export class NfcReaderTestPage {
  nav: NavController

  constructor(public navCtrl: NavController, private nfc: NFC, private ndef: Ndef) {
    this.nfc = nfc;
    this.ndef = ndef;
    this.test();
  }





  public test() {
    this.nfc.addNdefListener(() => {
  console.log('successfully attached ndef listener');
}, (err) => {
  console.log('error attaching ndef listener', err);
}).subscribe((event) => {
  console.log('received ndef message. the tag contains: ', event.tag);
  console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

  let message = this.ndef.textRecord('Hello world');
  this.nfc.share([message]).then(() => {console.log("e");}).catch(() => {console.log("e");});
});
  }



}
