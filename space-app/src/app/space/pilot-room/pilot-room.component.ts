import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[]=[];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit(): void {

    this.pilots.push(new Pilot('Tom Kowal' , '/assets/pilot1.jpg'));
    this.pilots.push(new Pilot('Bob Kowal'));
    console.log('pilots', this.pilots)
  }
  select(pilot: Pilot) : void {
    this.selectedPilot = pilot;
  }
}
