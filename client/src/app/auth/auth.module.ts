import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoopbackLoginComponent } from './loopback/lb-login.component';
import { LoopbackLoginService } from './loopback/lb-login.service';

import {MdInputModule, MdIconModule, MdListModule, MdDialogModule, MdToolbarModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdChipsModule, MdTooltipModule} from '@angular/material';

@NgModule({
  imports:      [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    // material
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    MdChipsModule,
    MdTooltipModule,
    MdToolbarModule,
    MdDialogModule,
    MdListModule,
    MdIconModule,
    MdInputModule
  ],
  declarations: [ LoopbackLoginComponent ],
  providers:    [ LoopbackLoginService ],
  exports:      [ LoopbackLoginComponent ]
})
export class AuthModule {
  constructor() { }
}
