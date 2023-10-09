import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  //camelCase and [] so it's recognized as a directive [ngStyle]
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  //elementRef is element the directive was placed on
  //type: ElementRef
  //private so we make it a property of this class but can use it everywhere in the class
  constructor(private elementRef: ElementRef){
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'darkseagreen';
  }
}
