import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  @Input() set appUnless(cond: boolean) {
    if (!cond) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

}
