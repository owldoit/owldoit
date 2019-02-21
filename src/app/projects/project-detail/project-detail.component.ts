import { Component, OnInit, Input } from '@angular/core';

import { Project } from './../project';
import { FirestoreDataService } from '../../services/firebase/firestore-data.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project: Project;
  
  constructor(private firestoreDataService: FirestoreDataService) { }

  ngOnInit() {}

  signUp(project){
  	console.log("011111 - " + project);
  	this.firestoreDataService.signUpForProject(project.id);
  }

}
