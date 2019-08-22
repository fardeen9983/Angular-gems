import {Component, OnInit} from '@angular/core';
import {ServerElement} from './server-element/server-element.model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  serverElements: ServerElement[] = [
    new ServerElement('Test Server', 'Just a test', 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
