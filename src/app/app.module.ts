import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // collection of things needed by the angualar app
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalculatorModule } from './components/calculator/calculator.module';
import { FormModule } from './components/form/form.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AngularAppModule } from './components/Angular/angular-app/angular-app.module';

@NgModule({
  declarations: [AppComponent], // non-standalone components

  imports: [ // modules you want to use in this module
    BrowserAnimationsModule,
    CalculatorModule,
    FormModule,
    AppRoutingModule,
    RouterModule,
    AngularAppModule,
  ],
  exports: [], // components, directives, pipes or modules that want to make avail to other modules that import this module
  bootstrap: [AppComponent], // root component
})
export class AppModule {}


// app.module is the root module, so export is not done here 