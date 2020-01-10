import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.borders('red');
    this.icon('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.borders('');
    this.icon('');
  }

  private borders(color: string) {
    this.el.nativeElement.closest('li').style.borderColor = color;
  }
  private icon(color: string) {
    this.el.nativeElement.style.color = color;
  }
} 
