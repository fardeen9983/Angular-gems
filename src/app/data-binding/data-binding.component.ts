import {Component, OnInit} from '@angular/core';
import {ServerElement} from './server-element/server-element.model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  serverElements: ServerElement[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onElementAdded(element: ServerElement) {
    this.serverElements.push(element);
  }

}
