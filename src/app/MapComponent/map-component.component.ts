import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  public displayName(name: string){
    console.log("hi");
  }

}
