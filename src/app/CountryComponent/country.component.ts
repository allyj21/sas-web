import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country: string;

  constructor() { }

  ngOnInit() {
    var pathArray = window.location.pathname.split('/');
    this.country = pathArray[2];
    console.log(this.country);
  }

}
