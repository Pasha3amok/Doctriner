import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/main-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {
    path: 'main-page',
    component: MainPageComponent,
  },
  {
    path: 'create-modules',
    loadComponent: () =>
      import('../pages/create-modules/create-modules.component').then(
        (m) => m.CreateModuleComponent
      ),
  },
  { path: '**', redirectTo: '/main-page' },
];
