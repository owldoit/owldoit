import { Component } from '@angular/core';

import { Project }    from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  model = new Project(0, "test title", "writing stuff here to test", new Date("2019-01-24"), 1);
	submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}