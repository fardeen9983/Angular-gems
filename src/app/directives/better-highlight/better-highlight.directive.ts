import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostBinding('style.color') color = 'black';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.color = 'white';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.color = 'black';
  }
}
