import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  id = 123;
  status = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.status;
  }

  getColor() {
    return status === 'offline' ? 'red' : 'green';
  }
}
