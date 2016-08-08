import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'TabContainer',
  template: `
    <div class="TabContainer test">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    
  `]
})
export class TabContainer {

}

@Component({
  selector: 'TabContainerHeader',
  template: `
    <div className="TabContainerHeader test">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TabContainerHeader {

}

@Component({
  selector: 'TabContainerBody',
  template: `
    <div className="TabContainerBody">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TabContainerBody {

}
