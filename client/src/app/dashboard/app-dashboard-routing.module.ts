import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const APP_DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent }
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_DASHBOARD_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
