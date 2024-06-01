import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
import { DataService } from './data-service.service';

@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private service: DataService
  ) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    // this.isOpen = !this.isOpen;
    // let part = this.el.nativeElement.querySelector('.dropdown-menu');
    // if (this.isOpen) {
    //   this.renderer.addClass(part, 'show');
    // } else {
    //   this.renderer.removeClass(part, 'show');
    // }
    if (this.service.isMobileDevice) this.OnChangeClass();

    //console.log('which device => ' + this.service.isMobileDevice);
  }

  @HostListener('mouseenter') OnMouseHover() {
    if (!this.service.isMobileDevice) this.OnChangeClass();
  }
  @HostListener('mouseleave') OnMouseLeave() {
    this.OnChangeClass();
  }
  OnChangeClass() {
    this.isOpen = !this.isOpen;
    let part = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
  }
}
