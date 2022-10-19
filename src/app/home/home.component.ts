import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  initial_time: Number = 25;
  
  constructor() { }

  ngOnInit(): void {
   
  }

  startCounter(initial_time: any) {
  
    setInterval(() => this.decreaseTime(initial_time), 1000);
  }
  decreaseTime(initial_time: any) {
    
    console.log("Starting the counter");
    console.log(initial_time);
    // this.initial_time - 1;
    
    console.log("delete")
  }


}
