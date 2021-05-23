import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceShipService } from './space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {
  constructor(private spaceShipService: SpaceShipService , private router: Router){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length;
    if (hasSpaceShips) {
      return true;
    }  else {
      alert('nie ma statków w hangarze');
      return this.router.parseUrl('/')
    }
    
  }

  
}
