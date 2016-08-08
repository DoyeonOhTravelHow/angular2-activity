import { provideRouter, RouterConfig } from '@angular/router';

import { ActivityHomeRoutes } from './+activity/+home/index';



const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/activity',
    pathMatch: 'full'
  },
  ...ActivityHomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
