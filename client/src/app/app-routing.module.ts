import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoopbackLoginComponent } from './auth/loopback/lb-login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const APP_ROUTES: Routes = [
  { path: 'bs-templates', loadChildren: './bs-templates/bs-templates.module#BsTemplatesModule', canLoad: [AuthGuard] },
  { path: 'login', component: LoopbackLoginComponent },
  { path: '', redirectTo: 'bs-templates/bs-simple-sidebar', pathMatch: 'full'  },
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
