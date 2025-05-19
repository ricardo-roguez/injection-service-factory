import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AuthService} from './services/auth.service';
import {environment} from '../environments/environment';
import {AuthServiceNewService} from './services/auth-service-new.service';
import {AuthServiceOldService} from './services/auth-service-old.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AuthService,
      useClass: environment.production ? AuthServiceNewService : AuthServiceOldService
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
