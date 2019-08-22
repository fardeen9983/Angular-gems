import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ServerElement} from './server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement')
  element: ServerElement;

  constructor() {
  }

  ngOnInit() {
  }

}
