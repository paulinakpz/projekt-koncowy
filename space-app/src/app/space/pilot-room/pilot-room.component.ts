import { Component, OnInit , Output , EventEmitter} from '@angular/core';

import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[]=[];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit(): void {

    this.pilots.push(new Pilot('Tom Bern' , '/assets/pilot1.png'));
    this.pilots.push(new Pilot('Bob Hovey'));
    this.pilots.push(new Pilot('Andrew Soho' ));
    // console.log('pilots', this.pilots)
  }
  select(pilot: Pilot) : void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
    console.log("select" , pilot)
    }

    pilotLeave():void {
      const index = this.pilots.indexOf(this.selectedPilot);
      this.pilots.splice(index, 1)
      this.select(null);
    }
    pilotReturn(pilot: Pilot):void {
      this.pilots.push(pilot);
    
    }
}
