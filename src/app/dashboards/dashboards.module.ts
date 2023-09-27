import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CriticosPageComponent } from './pages/criticos-page/criticos-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CriticosPageComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
