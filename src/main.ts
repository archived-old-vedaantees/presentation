import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RuntimeModule } from './app/runtime/runtime.module';
import { environment } from './environments/environment';

if (environment.production) 
  enableProdMode();

platformBrowserDynamic()
        .bootstrapModule(RuntimeModule)
        .catch(err => console.log(err));