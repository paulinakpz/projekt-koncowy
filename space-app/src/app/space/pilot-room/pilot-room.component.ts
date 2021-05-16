import { Component, OnInit , Output , EventEmitter} from '@angular/core';

import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot>();
  pilots: Pilot[]=[];
  selectedPilot: Pilot = null;

  constructor(private pilotService: PilotService) { }

  ngOnInit(): void {

this.pilotService.getPilots().subscribe({
  next:(pilots) => this.pilots=pilots,
  error: ()=>alert("coś poszło nie tak")
})
    // this.pilots.push(new Pilot('Tom Bern' , '/assets/pilot1.png'));
    // this.pilots.push(new Pilot('Bob Hovey'));
    // this.pilots.push(new Pilot('Andrew Soho' ));
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
