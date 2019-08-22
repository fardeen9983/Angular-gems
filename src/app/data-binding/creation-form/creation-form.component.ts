import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerElement} from '../server-element/server-element.model';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output()
  elementCreated = new EventEmitter<ServerElement>();
  @ViewChild('serverContentInput', {static: false})
  serverContentRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverName: string) {
    this.elementCreated.emit(new ServerElement(serverName, this.serverContentRef.nativeElement.value, 0));
  }

  onAddBlueprint(serverName: string) {
    this.elementCreated.emit(new ServerElement(serverName, this.serverContentRef.nativeElement.value, 1));
  }
}
