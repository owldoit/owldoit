import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { Profile1Component } from './profile1/profile1.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { LoginComponent } from './login/login.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const routes: Routes = [
{ path: '', component: LandingPageComponent },
{ path: 'profile', component: Profile1Component },
{ path: 'project', component: ProjectFormComponent },
{ path: 'all-projects', component: AllProjectsComponent },
{ path: 'detail/:id', component: ProjectDetailComponent },
{ path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
