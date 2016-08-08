import { Component } from '@angular/core';

import { SearchDialogComponent } from './searchDialog/search-dialog.component';

@Component({
  selector: 'PickDestination',
  template: `
      <div class="pick-destination">
        여행국가<button (click)="onPickDestination($event)">선택</button>
      </div>
      <SearchDialog [displayed]="displayedSearchDialog" >
      </SearchDialog>
  `,
  styles: [`
    .pick-destination{
      height: 75px;
      border: 1px solid black;
      position: relative;
    }
  `],
  directives: [ SearchDialogComponent ]
})
export class PickDestinationComponent {
  displayedSearchDialog = false;

  onPickDestination(e){
    this.displayedSearchDialog = true;
    console.log(this.displayedSearchDialog);
  }
}
