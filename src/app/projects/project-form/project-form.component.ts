import { Component } from '@angular/core';

import { Project }    from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  model = new Project(0, '', '', null, 1);
	submitted = false;

  onSubmit() { this.submitted = true; }

  newProject() {
	  this.model = new Project(0, '', '', null, 1);
	}
}