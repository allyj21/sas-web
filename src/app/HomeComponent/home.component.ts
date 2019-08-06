import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public departDate: Date = new Date(2020, 0, 2);
  public secondsLeft: string;
  public minutesLeft: string;
  public hoursLeft: string;
  public daysLeft: string;

  constructor() { }

  

  ngOnInit() {
    setInterval( () => this.countdown(), 1); 
  }

  public countdown(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var diff = this.departDate.getTime() - today.getTime();
    console.log(dd + " " + mm + " " + yyyy)
    var diffSeconds = (diff / 1000 % 60).toPrecision(2);
		var diffMinutes = (diff / (60 * 1000) % 60).toPrecision(2);
		var diffHours = (diff / (60 * 60 * 1000) % 24).toPrecision(2);
    var diffDays = (diff / (24 * 60 * 60 * 1000)).toPrecision(3);
    
    this.secondsLeft = diffSeconds.toString();
    this.minutesLeft = diffMinutes.toString();
    this.hoursLeft = diffHours.toString();
    this.daysLeft = diffDays.toString();

    
    

    
  }

  

}
