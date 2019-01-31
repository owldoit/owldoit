import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Profile1Component } from './profile1/profile1.component';

import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'project', component: ProjectFormComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
