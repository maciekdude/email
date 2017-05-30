import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

import { AppRoutingModule } from './app-dashboard-routing.module';
import { EmailViewComponent } from './email-view/email-view.component';

import { EmailService } from './services/email.service';
import { ConversationService } from './services/conversation.service';
import { NluService } from './services/nlu.service';

import { SummaryComponent } from './summary/summary.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent,
    AppSidebarComponent,
    EmailViewComponent,
    SummaryComponent,
    ActionsComponent
  ],
providers: [
  EmailService,
  ConversationService,
  NluService
]
})
export class AppDashboardModule { }
