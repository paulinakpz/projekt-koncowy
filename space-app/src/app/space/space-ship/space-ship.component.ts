import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {
  
  spaceShip = {
    modelName: 'Boeing',
    imageUrl: '../assets/space-ship.png',
    health: 75,
    activeShields:true,
    activeWeapon: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
