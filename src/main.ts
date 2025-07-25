//! when using module

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) 
  .catch(err => console.error(err));

  //! when using component 
  // search code: component is used because its stand alone instead of module