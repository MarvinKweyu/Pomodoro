import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  timer = 1800; // set the time at 30 minutes

  countDown: any;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  startTimer(display: { textContent: string }) {
    
    let minutes;
    let seconds;

    this.countDown = interval(1000).subscribe((x) => {
      minutes = Math.floor(this.timer / 60);
      seconds = Math.floor(this.timer % 60);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      --this.timer;
      if (this.timer < 0) {
        // perform notification of completion
        console.log('timer is ended');
      }
    });
    
  }


  startCounter() {
    // will disable after click
    let callDuration = this.elementRef.nativeElement.querySelector('#time');
    this.startTimer(callDuration);
  }
  //  this button is disabled at the start of the program
  stopCounter(){
    this.countDown.unsubscribe();
    console.log("stop coutner")
    // enable start button counter
  }
}
