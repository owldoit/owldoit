import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../../services/firebase/firestore-data.service';
import { Project } from '../project';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  project = new Project('', '', '', '', null, 1);

  projectArray: Project[] = [];


  ngOnInit() {
    this._data.getProjects().subscribe(
      (project: Project[]) => {
        this.projectArray = project;
        console.log(this.projectArray);
      }
    );
  }

  constructor(public _data: FirestoreDataService) {
  }

  onSubmit() {
    console.log("addProject():");
    console.log(this.project);
    this._data.addProject(JSON.parse(JSON.stringify(this.project)));
    this.project.ownerId = '';
    this.project.title = '';
    this.project.description = '';
    this.project.deadline = new Date();
    this.project.participants = 1;
  }

  onDelete(project) {
    this._data.deleteProject(project);
  }


}
