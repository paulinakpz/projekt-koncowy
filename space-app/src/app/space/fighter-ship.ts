import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class FighterShip extends SpaceShip {
    constructor (pilot?: Pilot) {
        super('F16', '/assets/statek-f16.jpg', pilot)
    }
}


