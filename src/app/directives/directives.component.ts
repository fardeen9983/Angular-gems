import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  odds = [1, 3, 5, 7, 9];
  evens = [2, 4, 6, 8, 10];
  onlyOdd = false;
  value = 100;

  constructor() {
  }

  ngOnInit() {
  }
}
