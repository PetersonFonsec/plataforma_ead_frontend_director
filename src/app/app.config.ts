
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideQuillConfig } from 'ngx-quill';

import { tokenInterceptor } from '@shared/interceptors/token/token.interceptor';
import { errorInterceptor } from '@shared/interceptors/error/error.interceptor';
import Counter from '@shared/components/text-editor/counter';

import { routes } from './app.routes';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor, errorInterceptor])),
    provideEnvironmentNgxMask(maskConfig),
    provideQuillConfig(
      {
        customModules: [{
          implementation: Counter,
          path: 'modules/counter'
        }],
        customOptions: [{
          import: 'formats/font',
          whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
        }]
      }
    ),
    provideExperimentalZonelessChangeDetection()
  ]
};
