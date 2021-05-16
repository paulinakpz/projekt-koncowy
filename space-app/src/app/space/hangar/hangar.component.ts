import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship'
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent; 
  
  

  selectedPilot : Pilot = null;
  spaceShips = this.spaceShipService.hangarShips;
  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit(): void {
    // this.spaceShips.push(new FighterShip());
    // this.spaceShips.push(new FighterShip(new Pilot('Jas Nowak' , '/assets/pilot1.png')));
    // this.spaceShips.push(new BomberShip())
    // this.spaceShips.push(new BomberShip(new Pilot('Tomek Kowalski')))
    
  }
  assignPilot(spaceShip:SpaceShip):void{
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }
  deassignPilot(spaceShip:SpaceShip):void{
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null
  }
}