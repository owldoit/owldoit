import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Project } from '../../projects/project'
import { Student } from '../../users/student';
import { User } from '../../services/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
	projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<Project[]>;
  projectDocument: AngularFirestoreDocument<Project>;

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDocument: AngularFirestoreDocument<User>;

  studentsCollection: AngularFirestoreCollection<Student>;
  students: Observable<Student[]>;
  studentDocument: AngularFirestoreDocument<Student>;

  constructor(public _afs: AngularFirestore) {
    this.usersCollection = this._afs.collection('users', x => x.orderBy('title', 'asc'));
    this.users = this.usersCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as User;
            data.uid = a.payload.doc.id;
            return data;
          });
      });

    this.studentsCollection = this._afs.collection('students', x => x.orderBy('title', 'asc'));
    this.students = this.studentsCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Student;
            data.uid = a.payload.doc.id;
            return data;
          });
      });

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

  getUsers() {
    return this.users;
  }

  updateUser(user) {
    this.userDocument = this._afs.doc(`users/${this.getUserId()}`);
    this.userDocument.update(user);
  }

  getUserId(){
  	let user = firebase.auth().currentUser;
  	return user.uid;
  }

  getStudentId(){
    let db = firebase.firestore();
    let user = this.getUserId();
    let studentId:string;

    let studentpromise = db.collection("students").where("uid", "==", this.getUserId())
                    .get()
                    .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            console.log(doc.id, " => ", doc.data());
                            studentId = doc.id;
                            console.log("inner student id = " + studentId);
                            return studentId;
                        });
                    })
                    .catch(function(error) {
                        console.log("Error getting documents: ", error);
                    });
    console.log("promise= " + studentpromise);

    return studentId;
  }

  getStudents() {
    return this.students;
  }

  addStudent(student) {
    student.id = this.studentsCollection.ref.doc().id
    student.uid = this.getUserId();
    this.studentsCollection.add(student);
  }

  deleteStudent(student) {
    this.studentDocument = this._afs.doc(`students/${student.id}`);
    this.studentDocument.delete();
  }

  signUpForProject(project){
    let projects = {};
    projects[`projects.${project}`] =  "In Progress";
    let student = this.getStudentId();
    console.log("student= "+student);
    this.studentDocument = this._afs.doc(`students/${this.getStudentId()}`);
    console.log("2");

    this.studentDocument.update(projects);
    console.log(projects);

    console.log("4");
    console.log(this.studentDocument);
  }

}
