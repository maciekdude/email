import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

import { AppRoutingModule } from './app-dashboard-routing.module';
import { EmailViewComponent } from './email-view/email-view.component';

import { EmailService } from './services/email.service';
import { ConversationService } from './services/conversation.service';
import { NluService } from './services/nlu.service';

import { SummaryComponent } from './summary/summary.component';
import { ActionsComponent } from './actions/actions.component';
import { ResponseComponent } from './response/response.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    AppSidebarComponent,
    EmailViewComponent,
    SummaryComponent,
    ActionsComponent,
    ResponseComponent
  ],
providers: [
  EmailService,
  ConversationService,
  NluService
]
})
export class AppDashboardModule { }
