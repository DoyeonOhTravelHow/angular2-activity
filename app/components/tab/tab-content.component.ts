import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'TabContent',
  template: `
    <div class="TabContent">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TabContent {

}
