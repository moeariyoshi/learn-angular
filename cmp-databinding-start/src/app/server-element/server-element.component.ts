import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,
  OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
// encapsulation: ViewEncapsulation
// Emulated is default - styles applied to only this component
// None - styles applied globally!
// Native/ShadowDom

export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //element is a JS object with three stuff!
  //Allow use outside server-element.component.html like in app.component.ts
  //'nickname' outside ex. srvElement
  @Input('InputNickname') element: {type: string, name:string, content: string};
  @Input () name: string;
  //look inside .html for #heading or element
  @ViewChild('heading', {static: true}) header: ElementRef;
  //What is ElementRef?

  // See inside ng-content
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  //ngOnChanges - called after a bound @Input() property changes
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
    /*Object {
      //bound property
      element: SimpleChange
        currentValue: Object
          content: "Just a test!"
          name:
          type:
        firstChange: true
        previousValue: undefined
     */
  }

  //ngOnInit - called after the component is initialized
  ngOnInit() {
    console.log('ngOnInit called!');
    // div and p doesn't have textContent! Not rendered yet!
    //see ngAfterViewInit
    console.log("Text Content: " + this.header.nativeElement.textContent);
    // see ngAfterContentInit
    console.log("Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  //ngDoCheck - called during every change detection run
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  //ngAfterContentInit - called after content (ng-content) has been projected into view
  //Init inside <ng-content> tags
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log("Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  //ngAfterContentChecked - called every time the projected content has been checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  //ngAfterViewInit - called after the component's view (and child views) has been initialized after content checked
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  //ngAfterViewChecked - called every time the view (and child views) have been checked after content checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  //ngOnDestroy - called once the component is about to be destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}

