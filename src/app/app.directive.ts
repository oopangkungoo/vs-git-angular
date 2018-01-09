import { Directive, HostBinding, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class AppDirective {

  sub: any;
  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private ElementRef: ElementRef) {
    this.sub = this.ElementRef.nativeElement;
  }

  @HostBinding('style.backgroundColor')
  backgroundColor = 'red';

  @HostListener('blur', ['$event.target.value'])
  onblur(value: any) {
      this.sub.value = this.sub.value.toUpperCase();
    }
}
