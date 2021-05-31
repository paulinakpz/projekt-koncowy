import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})

export class SpaceImageDirective {
zoom = 1.0;
  constructor() { }
  @HostBinding('style.transform') get scale() {
    return `scale(${this.zoom})`
  } 
  @HostListener('mouseover') zoomIn() {
    this.zoom += 0.02;
  }
  @HostListener('mouseleave') zoomOut() {
    this.zoom -= 0.02;
  }
}
