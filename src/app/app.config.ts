
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideQuillConfig } from 'ngx-quill';

import { routes } from './app.routes';
import { tokenInterceptor } from '@shared/interceptors/token/token.interceptor';
import { errorInterceptor } from '@shared/interceptors/error/error.interceptor';
import { editorConfig } from '@shared/components/text-editor/text-editor.config';
import Counter from '@shared/components/text-editor/counter';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
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
    )
  ]
};
