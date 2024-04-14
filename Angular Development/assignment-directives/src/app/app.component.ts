import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .titleColor {
        color: blue;
      }
      .numClicksColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Practicing Directives';
  password: string = '';
  displayToggle: Boolean = false;
  countClick: number = 0;
  numClicks = [];

  getPassword() {
    this.displayToggle = !this.displayToggle;
    this.password = 'practiceDirective1234@udemy';
    /** push the number of clicks into an array*/
    // this.numClicks.push(this.countClick += 1);
    /** using date stamps */
    this.numClicks.push(new Date());
  }
}
