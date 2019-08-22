import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() defaultHighlightColor = 'blue';
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.defaultHighlightColor);
    this.color = 'white';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.defaultColor);
    this.color = 'black';
  }
}
