import { Component } from '@angular/core';

import { Project }    from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
	project = new Project(0, 0, '', '', null, 1);
	submitted = false;
	verifiedSubmit = false;

	constructor ( ) {}

  onSubmit() { 
  	if(this.submitted){
  		this.verifiedSubmit = true;
  	}

  	if(!this.verifiedSubmit){
  		this.submitted = true;
  	}

  	if(this.verifiedSubmit)
  	{
  		this.verifiedSubmit = true;
  		this.submitted = true;
  	}
  }

  newProject() {
	  this.project = new Project(0, 0, '', '', null, 1);
	}
}