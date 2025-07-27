import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./components/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'css',
    loadChildren: () =>
      import('./components/css-bootcamp/css-bootcamp.module').then(
        (m) => m.CssBootcampModule
      ),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./components/calculator/calculator.module').then(
        (m) => m.CalculatorModule
      ),
  },
  {
    path: 'js',
    loadChildren: () =>
      import('./components/js-bootcamp/js-bootcamp.module').then(
        (m) => m.JsBootcampModule
      ),
  },
  {
    path: 'photo-blog',
    loadChildren: () =>
      import('./components/photo-blog/photo-blog.module').then(
        (m) => m.PhotoBlogModule
      ),
  },
  {
    path: 'flex-box',
    loadChildren: () =>
      import('./components/flex-box/flex-box.module').then(
        (m) => m.FlexBoxModule
      ),
  },
  {
    path: 'media-query',
    loadChildren: () =>
      import('./components/media-query/media-query.module').then(
        (m) => m.MediaQueryModule
      ),
  },
  {
    path: 'nav-bar',
    loadChildren: () =>
      import('./components/nav-bar/nav-bar.module').then((m) => m.NavBarModule),
  },
  {
    path: 'pricing-panel',
    loadChildren: () =>
      import('./components/pricing-panel/pricing-panel.module').then(
        (m) => m.PricingPanelModule
      ),
  },
  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./components/bootstrap/bootstrap.module').then(
        (m) => m.BootstrapModule
      ),
  },
  {
    path: 'loops',
    loadChildren: () =>
      import('./loops/loops.module').then((m) => m.LoopsModule),
  },
  {
    path: 'guessing-game',
    loadChildren: () =>
      import('./components/guessing-game/guessing-game.module').then(
        (m) => m.GuessingGameModule
      ),
  },
  {
    path: 'todo-app',
    loadChildren: () =>
      import('./components/todo-app/todo-app.module').then(
        (m) => m.TodoAppModule
      ),
  },
  {
    path: 'functions',
    loadChildren: () =>
      import('./components/functions/functions.module').then(
        (m) => m.FunctionsModule
      ),
  },
  {
    path: 'callbacks-array-methods',
    loadChildren: () =>
      import(
        './components/callbacks-array-methods/callbacks-array-methods.module'
      ).then((m) => m.CallbacksArrayMethodsModule),
  },
  {
    path: 'dom-practice',
    loadChildren: () =>
      import('./components/dom-practice/dom-practice.module').then(
        (m) => m.DomPracticeModule
      ),
  },
  {
    path: 'dom-practice',
    loadChildren: () =>
      import('./components/dom-practice/dom-practice.module').then(
        (m) => m.DomPracticeModule
      ),
  },
  {
    path: 'events-practice',
    loadChildren: () =>
      import('./components/events-practice/events-practice.module').then(
        (m) => m.EventsPracticeModule
      ),
  },
  {
    path: 'ibm-assesment',
    loadChildren: () =>
      import('./components/ibm-assesment/ibm-assesment.module').then(
        (m) => m.IbmAssesmentModule
      ),
  },
  { path: 'angular-app', loadChildren: () => import('./components/Angular/angular-app/angular-app.module').then(m => m.AngularAppModule) },
  { path: 'invesment-app', loadChildren: () => import('./components/angular-investment-calculator/investment-app/investment-app.module').then(m => m.InvestmentAppModule) },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
