import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //condition can be named anything
  //appUnless same as selector name
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //display
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //don't display
      this.vcRef.clear();
    }

  }

  //constructor(what, where to place: view container)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
