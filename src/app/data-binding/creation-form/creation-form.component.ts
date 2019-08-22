import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.elementCreated.emit(new ServerElement(this.newServerName, this.newServerContent, 0));
  }

  onAddBlueprint() {
    this.elementCreated.emit(new ServerElement(this.newServerName, this.newServerContent, 1));
  }
}
