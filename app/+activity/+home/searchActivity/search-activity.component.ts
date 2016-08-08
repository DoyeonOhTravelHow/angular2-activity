import { Component } from '@angular/core';

@Component({
  selector: 'SearchActivity',
  template: `
    <div class="search_activity">
      This is search activity
    </div>
  `,
  styles: [`
    .search_activity{
      height: 75px;
      border: 1px solid black;
      position: relative;
    }
  `]
})
export class SearchActivityComponent {

}
