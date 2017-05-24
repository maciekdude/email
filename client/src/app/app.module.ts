import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import {} from 'jasmine';

import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AlertService } from './utils/alert.service'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppSidebarComponent } from './dashboard/app-sidebar/app-sidebar.component';

import { ScrollToModule } from 'ng2-scroll-to';
import { AlertModule, CollapseModule, BsDropdownModule, ButtonsModule, TabsModule, PaginationModule, ProgressbarModule, PopoverModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ScrollToModule.forRoot(),
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
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
