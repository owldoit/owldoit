import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectFormComponent } from './projects/project-form/project-form.component';

const routes: Routes = [
	{ path: 'project', component: ProjectFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
