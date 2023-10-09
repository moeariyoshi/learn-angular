import {
  Directive,
  ElementRef, OnInit,
  Renderer2,
  HostListener, HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'tan'; //optional alias
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(){
    //adding a fourth value: flags for overrides
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'tan');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'tan');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mousegone(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
