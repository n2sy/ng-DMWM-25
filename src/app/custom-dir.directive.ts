import { Directive, HostBinding, HostListener, type ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
    @HostBinding('style.backgroundColor') bg;// = "pink";
    @HostBinding('style.color') txtColor;// = "grey";

    @HostListener('mouseenter') mouseenter() {
        this.bg = "grey";
        this.txtColor = "white"
    }
    @HostListener('mouseleave') mouseleave() {
        this.bg = "pink";
        this.txtColor = "grey"
    }

}
