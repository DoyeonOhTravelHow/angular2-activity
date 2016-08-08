import { Component } from '@angular/core';

@Component({
  selector: 'ShowBestDestination',
  template: `
    <div class="show_best_destination">
      This is Best Destination
    </div>
  `,
  styles: [`
    .show_best_destination{
      height: 75px;
      border: 1px solid black;
      position: relative;
    }
  `]
})
export class ShowBestDestinationComponent {

}
