import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
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
            return data;
          });
      });
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
  	project.id = this.projectsCollection.ref.doc().id
  	project.ownerId = this.getUserId();
    this.projectsCollection.add(project);
  }

  deleteProject(project) {
    this.projectDocument = this._afs.doc(`projects/${project.id}`);
    this.projectDocument.delete();
  }

  getUserId(){
  	let user = firebase.auth().currentUser;
  	return user.uid;
  }

}
