import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './dashboards/pages/layout-page/layout-page.component';
import { CriticosPageComponent } from './dashboards/pages/criticos-page/criticos-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboards/dashboards.module').then( m => m.DashboardsModule ),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
