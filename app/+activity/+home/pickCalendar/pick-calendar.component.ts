import { Component } from '@angular/core';

@Component({
  selector: 'PickCalendar',
  template: `
    <div class="pick_calendar">
      This is pick calendar
    </div>
  `,
  styles: [`
    .pick_calendar{
      height: 75px;
      border: 1px solid black;
      position: relative;
    }

  `]
})
export class PickCalendarComponent {

}
