import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class BomberShip extends SpaceShip {
  constructor (pilot?: Pilot) {
      super('F-16', 'assets/statek2.jpg', pilot)
  }
}

