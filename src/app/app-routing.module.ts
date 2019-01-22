import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profile1Component } from './profile1/profile1.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
