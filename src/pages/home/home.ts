import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('testImage') testImage;

  constructor(public navCtrl: NavController, private platform: Platform) {
    setTimeout(() => this._testCanvas(), 2000);
  }

  async _testCanvas() {
    await this.platform.ready();

    const image = this.testImage.nativeElement;
    //@ts-ignore
    cordova.plugins.CameraStream.capture = data => image.src = data;
    //@ts-ignore
    <any>cordova.plugins.CameraStream.startCapture('front');
  }
}
