import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";


import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import {} from 'jasmine';

import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { AlertService } from './utils/alert.service'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ScrollToModule } from 'ng2-scroll-to';
import { AlertModule, CollapseModule, BsDropdownModule, ButtonsModule, TabsModule, PaginationModule, ProgressbarModule, PopoverModule, TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
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
    TooltipModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
