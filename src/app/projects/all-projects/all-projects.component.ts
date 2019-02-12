import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from './../project';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit { 

  public projects: Observable<any[]>;
  public selectedProject: Project;
  
  constructor ( private afs: AngularFirestore ) {
    this.projects = afs.collection('/projects').valueChanges();
  }


  ngOnInit() {}

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
