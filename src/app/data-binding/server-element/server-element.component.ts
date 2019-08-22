import {Component, Input, OnInit} from '@angular/core';
import {ServerElement} from './server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input()
  element: ServerElement;

  constructor() {
  }

  ngOnInit() {
  }

}
