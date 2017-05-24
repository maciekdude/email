import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

import { AppRoutingModule } from './app-dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent,
    AppSidebarComponent
  ]
})
export class AppDashboardModule { }
