import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { IElement } from "../sever-element/IElement";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated=new EventEmitter<IElement>();
  @Output('bluCreated') blueprintCreated=new EventEmitter<IElement>();

  @ViewChild('iNewServerContent') iNewServerContent:ElementRef
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(iServerName:HTMLInputElement) {
    this.serverCreated.emit({
      name:iServerName.value,
      content:this.iNewServerContent.nativeElement.value
    });

  }

  onAddBlueprint(iServerName:HTMLInputElement) {
    this.blueprintCreated .emit({
      name:iServerName.value,
      content:this.iNewServerContent.nativeElement.value
    });
  }
}
