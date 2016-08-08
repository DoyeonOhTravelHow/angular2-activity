import { Component } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, RouterConfig } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="main">
      <div style="height:46px;display:block;position:relative;text-align:center;">
        TravelHow
      </div>
      <nav style="height:39px;">
        <a [routerLink]="['activity']">ACTIVITY HOME</a>
      </nav>
      <router-outlet></router-outlet>
      <div class="footer">
        트래블하우는 통신판매중개업자로서 통신판매의 당사자가 아니며, 상품주문, 예약, 발권 및 환불의 의무와 책임은 각 판매업체에 있습니다.
      </div>
    </div>
  `,
  styles: [`
    .main{
      z-index: 1;
    }
    .footer{
      text-align: center;
      margin: 0;
      padding: 0;
      border: 0;
      font-weight: 400;
      vertical-align: baseline;
      background: transparent;
      border: 1px solid black;
      font-size: .917em;
      background: #4f4f4f;
      padding: 13px 8px;
      color: #a8a8a8;
      height: 148px;
    }
  `],
  viewProviders: [ HTTP_PROVIDERS ],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
}
