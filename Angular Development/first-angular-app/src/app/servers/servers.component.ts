import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrl: './servers.component.css',
  styles: [
    `
      online {
        color: 'red';
      }
    `,
  ],
})
export class ServersComponent {
  serverIdDisabled = false;
  createServer: string = 'No server was created';
  serverId: number = 10;
  serverStatus: string;
  serverName = 'TestServer';
  isServerCreated: Boolean = false;
  servers = ['TestServe 1', 'TestServer 2'];
  constructor() {
    setTimeout(() => (this.serverIdDisabled = true), 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    
    
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.createServer = `A new server ${this.serverName} was created`;
    this.servers.push(this.serverName);
    
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
