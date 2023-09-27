import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticosPageComponent } from './pages/criticos-page/criticos-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'criticos', component: CriticosPageComponent },
      { path: '', redirectTo: 'criticos', pathMatch: 'full' },
      { path: '**', redirectTo: 'criticos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
