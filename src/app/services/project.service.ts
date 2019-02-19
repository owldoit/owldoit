import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Project } from '../projects/project';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projectCollection: AngularFirestoreCollection<Project>;
  public projects: Observable<any[]>;

  constructor ( private afs: AngularFirestore) {
    this.projects = this.afs.collection('projects').valueChanges();
  }

  getProjects() {
    return this.projects;
  }
}
