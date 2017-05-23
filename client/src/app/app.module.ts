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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
