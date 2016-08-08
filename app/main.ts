import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { enableProdMode } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { Config } from './config';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

if (Config.ENV === 'prod') { enableProdMode(); }

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: Config.APP_BASE
  }
]);
