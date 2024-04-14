import { Component } from '@angular/core';
@Component({
  selector: 'success-alert',
  templateUrl: './successalert.component.html',
  styles: [
    `
      button {
        background-color: green;
        color: white;
        border: none;
        border-radius: 1em;
      }
    `,
  ],
})
export class SuccessAlert {
  successBtn = 'Success';
}
