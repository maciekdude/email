import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { ScrollToModule } from 'ng2-scroll-to';

import { BsSimpleSidebarComponent } from './bs-simple-sidebar/bs-simple-sidebar.component';
import { BsStylishComponent } from './bs-stylish/bs-stylish.component';
import { SimpleSidebarComponent } from './bs-simple-sidebar/simple-sidebar/simple-sidebar.component';
import { StylishSidebarComponent } from './bs-stylish/stylish-sidebar/stylish-sidebar.component';
import { BsLogoNavComponent } from './bs-logo-nav/bs-logo-nav.component';
import { BsSampleComponent } from './bs-sample/bs-sample.component';

import { BsRoutingModule } from './bs-routing.module';
import { NavbarComponent } from './bs-logo-nav/navbar/navbar.component';

import { AlertModule, CollapseModule, BsDropdownModule, ButtonsModule, TabsModule, PaginationModule, ProgressbarModule, PopoverModule, TooltipModule } from 'ngx-bootstrap';
import { BsWslBasicComponent } from './bs-wsl-basic/bs-wsl-basic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsRoutingModule,
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
  declarations: [
    BsSimpleSidebarComponent,
    BsStylishComponent,
    StylishSidebarComponent,
    SimpleSidebarComponent,
    BsLogoNavComponent,
    BsSampleComponent,
    NavbarComponent,
    BsWslBasicComponent
  ],
  exports: [
    BsSimpleSidebarComponent,
    BsStylishComponent,
    BsLogoNavComponent,
    BsSampleComponent ]
})
export class BsTemplatesModule { }
