import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CalculatorModule } from './components/calculator/calculator.module';
import { FormModule } from './components/form/form.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AngularAppModule } from './components/Angular/angular-app/angular-app.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalculatorModule,
    FormModule,
    AppRoutingModule,
    RouterModule,
    AngularAppModule,
  ],

  exports: [],

  bootstrap: [AppComponent], // root component
})
export class AppModule {}
