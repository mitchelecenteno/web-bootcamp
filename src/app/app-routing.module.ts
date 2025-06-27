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
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
