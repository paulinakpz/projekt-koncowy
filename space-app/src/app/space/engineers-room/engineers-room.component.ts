import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { OrderFromValue } from '../order-from-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipType } from '../space-ship-type.enum';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';
interface ShipType {
  label: string,
  value: SpaceShipType
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {
  spaceShipTypes: ShipType[] = [
    {label: 'Fighter' , value: SpaceShipType.Fighter},
    {label: 'Bomber' , value: SpaceShipType.Bomber}
  ]


  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {validators: [Validators.required]
    }),
  shipCount: new FormControl(1 , {validators: [Validators.required , Validators.min(1) , Validators.max(5)]
  })
})
isProducing = false;
shipCount = this.spaceShipService.hangarShips.pipe(
  map((ships)=>ships.length)
)
  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit(): void {
  }

  orderSpaceShip(formValue: OrderFromValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue).subscribe({
      complete: () => this.isProducing = false
    })
  }
}
