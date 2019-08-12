import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  id = 123;
  status = 'offline';

  getServerStatus() {
    return this.status;
  }
}
