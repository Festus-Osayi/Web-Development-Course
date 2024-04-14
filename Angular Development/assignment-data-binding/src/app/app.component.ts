import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName: string = '';

  // onUpdateUsername(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }

  onReset() {
    this.userName = '';
  }
}
