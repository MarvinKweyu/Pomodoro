import { Component, OnInit, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  timer = 50; //1800 set the time at 30 minutes

  runCounter: boolean = false;
  playSound: boolean = false;

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
        this.playBell();
        
        // reset timer value to 00
        this.timer = 0
        this.countDown.unsubscribe()
      }
    });
    
  }


  toggleCounter() {
    // will disable after click
    this.runCounter = !this.runCounter;
    if(this.runCounter){
      
       let callDuration = this.elementRef.nativeElement.querySelector('#time');
      this.startTimer(callDuration);
    }else{
     this.stopCounter();
  }
  }
  //  this button is disabled at the start of the program
  stopCounter(){
    this.countDown.unsubscribe();
    // enable start button counter
  }

  playBell(){
    this.playSound = true;
    
     let audio = new Audio();
      audio.src = "../../assets/mixkit-modern-classic-door-bell-sound-113.wav";
      audio.load();
      audio.play();

  }
}
