import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Project } from '../../projects/project'


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
	projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;
  projectDocument: AngularFirestoreDocument<Project>;

  constructor(public _afs: AngularFirestore) {
  	this.projectsCollection = this._afs.collection('projects', x => x.orderBy('title', 'asc'));
    this.projects = this.projectsCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Project;
            data.id = a.payload.doc.id;
            console.log("data.id");
            console.log(data.id);
            return data;
          });
      });
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
  	console.log("addProject():");
  	console.log(project);
  	project.id = this.projectsCollection.ref.doc().id
    this.projectsCollection.add(project);
  }

  deleteProject(project) {
    this.projectDocument = this._afs.doc(`projects/${project.id}`);
    this.projectDocument.delete();
  }

}
