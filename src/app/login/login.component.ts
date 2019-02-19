import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

import { FirestoreDataService } from '../services/firebase/firestore-data.service';
import { User } from '../services/user.model';
import { Student } from '../users/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	student = new Student('','',false);

  constructor( public auth: AuthService, public firestoreDataService: FirestoreDataService) { }

  ngOnInit() {
  }

  userIsStudent(student) {
  	if(student){
  		this.firestoreDataService.addStudent(student);
  	}
  }

}
