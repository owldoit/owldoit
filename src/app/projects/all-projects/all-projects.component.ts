import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit { 

  public projects: Observable<any[]>;
  
  constructor ( private afs: AngularFirestore ) {
    this.projects = afs.collection('/projects').valueChanges();
  }


  ngOnInit() {}
}
