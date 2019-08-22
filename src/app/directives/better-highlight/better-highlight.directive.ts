import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
  }
}
