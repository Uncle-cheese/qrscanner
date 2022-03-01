import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanActive = false;
  scanResults=null;
  @ViewChild('video') video: ElementRef;

  videoElement: any;

  constructor(private toast: ToastController) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.videoElement = this.video.nativeElement;

  }

 async startScan(){
    const strem= navigator.mediaDevices.getUserMedia({
      video:{facingMode: 'enviroment'}
    })
    this.videoElement.srcobject=strem;
    this.videoElement.setAttribute('playsinline',true);
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }
  scan(){
    if(this.videoElement.readyState === this.video.nativeElement){
      
    }
  }

  reset(){
    this.scanResults = null;
  }

  stopScan(){
    this.scanActive =false;
  }

}
