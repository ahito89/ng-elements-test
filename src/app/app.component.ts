import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-modal-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
 @Input() name = 'friend';
 focus: string;
 focusSet = false;
 setFocus(value) {
   this.focus = value;
   this.focusSet = true;
 }
}
