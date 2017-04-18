import { NgModule } from '@angular/core';

import { EnvironmentVariables } from './environment-variables.interface';
import { envVariables } from './environment-variables.token';
import { devVariables } from './development';
import { prodVariables } from './production';
import { qaVariables } from './qa';

declare const process: any;

export function environmentFactory() {
  let currentEnvironmentVariables: EnvironmentVariables;

  switch (process.env.NODE_ENV) {
    case 'production':
      currentEnvironmentVariables = prodVariables;
      break;
    case 'qa':
      currentEnvironmentVariables = qaVariables;
      break;
    case 'dev':
      currentEnvironmentVariables = devVariables;
      break;
    default:
      currentEnvironmentVariables = devVariables;
      break;
  }

  return currentEnvironmentVariables;
}

@NgModule({
  providers: [
    {
      provide: envVariables,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}