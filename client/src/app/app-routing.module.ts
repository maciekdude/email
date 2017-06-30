import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoopbackLoginComponent } from './auth/loopback/lb-login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/app-dashboard.module#AppDashboardModule', canLoad: [AuthGuard] },
  { path: 'login', component: LoopbackLoginComponent },
  { path: 'home', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
