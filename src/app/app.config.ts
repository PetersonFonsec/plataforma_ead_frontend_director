import { provideAnimations } from '@angular/platform-browser/animations'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    provideEnvironmentNgxMask(maskConfig),
  ]
};
