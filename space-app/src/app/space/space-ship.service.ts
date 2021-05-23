import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { OrderFromValue } from './order-from-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';
import { map, take , tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);
  constructor() { }

  produceShips(formValue: OrderFromValue):Observable<SpaceShip>{
    const shipClass = formValue.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;

    return interval(SpaceShipService.shipProductionTime).pipe(
      map(()=> new shipClass()),
      take(formValue.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(),spaceShip]))
    )
  }
  removeShip(shipIndex: number) {
    const ships =[...this.hangarShips.getValue()];
    ships.splice(shipIndex , 1);
    this.hangarShips.next(ships);
  }
}
