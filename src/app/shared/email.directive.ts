import {Directive, ElementRef, HostListener} from '@angular/core';

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Directive({
  selector: '[fzEmail]'
})
export class EmailDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onKeyUp(){
    this.validate();
  }

  @HostListener('keydown') onKeyDown(){
    this.validate();
  }

  private validate() {
    let valid: boolean = emailRegExp.test(this.el && this.el.nativeElement.value);
    this.el.nativeElement.valid = this.el.nativeElement.valid && valid;
    this.el.nativeElement.errors.email = valid;
  }
}
