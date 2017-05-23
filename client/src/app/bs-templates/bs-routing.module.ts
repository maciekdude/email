import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { BsSimpleSidebarComponent } from './bs-simple-sidebar/bs-simple-sidebar.component';
import { BsStylishComponent } from './bs-stylish/bs-stylish.component';
import { BsLogoNavComponent } from './bs-logo-nav/bs-logo-nav.component';
import { BsSampleComponent } from './bs-sample/bs-sample.component';
import { BsWslBasicComponent } from './bs-wsl-basic/bs-wsl-basic.component';

const BS_ROUTES: Routes = [
  { path: 'bs-simple-sidebar', component: BsSimpleSidebarComponent },
  { path: 'bs-logo-nav', component: BsLogoNavComponent },
  { path: 'bs-stylish', component: BsStylishComponent },
  { path: 'bs-sample', component: BsSampleComponent },
  { path: 'bs-wsl-basic', component: BsWslBasicComponent },
  { path: '', redirectTo: 'bs-simple-sidebar', pathMatch: 'full'  }
];

@NgModule({
  imports: [
    RouterModule.forChild(BS_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class BsRoutingModule { }
