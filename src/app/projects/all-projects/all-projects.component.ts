import { Component, OnInit } from '@angular/core';

import { Project } from './../project';
import { ProjectService } from './../../services/project.service';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit { 

  public projects: Project[];
  public selectedProject: Project;
  
  constructor (private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
    console.log(project.id);
  }
}
