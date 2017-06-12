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
import { CurrentDemoService } from './services/current-demo.service';

import { SummaryComponent } from './summary/summary.component';
import { ActionsComponent } from './actions/actions.component';
import { ResponseComponent } from './response/response.component';
import { OverviewComponent } from './overview/overview.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AlertModule, CollapseModule, BsDropdownModule, ButtonsModule, TabsModule, PaginationModule, ProgressbarModule, PopoverModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    AppSidebarComponent,
    EmailViewComponent,
    SummaryComponent,
    ActionsComponent,
    ResponseComponent,
    OverviewComponent,
    NavbarComponent
  ],
providers: [
  EmailService,
  ConversationService,
  NluService,
  CurrentDemoService
]
})
export class AppDashboardModule { }
