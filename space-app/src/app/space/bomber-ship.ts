import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class BomberShip extends SpaceShip {
  constructor (pilot?: Pilot) {
      super('Casa', 'assets/statek2.png', pilot)
  }
}

