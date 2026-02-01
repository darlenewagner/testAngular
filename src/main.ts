import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//import { Container } from './app/container/container';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
