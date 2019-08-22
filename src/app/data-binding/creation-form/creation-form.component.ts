import {Component, OnInit} from '@angular/core';
import {ServerElement} from '../server-element/server-element.model';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    // serverElements.push(new ServerElement(this.newServerName, this.newServerContent, 0));
  }

  onAddBlueprint() {
    // serverElements.push(new ServerElement(this.newServerName, this.newServerContent, 1));
  }
}
