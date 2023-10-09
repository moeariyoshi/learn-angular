import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //Needed to be used as Event listener  ex. (click) from app.component.html
  @Output() serverAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('OutputNickname') blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = ''; replaced with nameInput: local reference
  //newServerContent = '';
  // @ViewChild('name of #localreference' or component) instead of two-way [(ngModel)]
  // static:true for use in ngOnInit
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // //unnecessary as input: serverData: {serverName: string, serverContent: string}
    // //code moved to and edited in app.component.ts
    // EVENT LISTENER!
    this.serverAdded.emit({
      serverName: nameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });

    //don't do this:
    // this.serverContentInput.nativeElement.value = 'something'
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //blueprintData: {serverName: string, serverContent: string}
    // code moved to and edited in app.component.ts
    this.blueprintAdded.emit({
      serverName: nameInput.value,
      //serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
