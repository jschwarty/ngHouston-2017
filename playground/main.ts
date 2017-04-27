import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../src/environments/environment';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

if (environment.production) {
  enableProdMode();
}

initializePlayground();
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
