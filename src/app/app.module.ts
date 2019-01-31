import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { LoginComponent } from './login/login.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
const config = {
  apiKey: "AIzaSyC7-T4wi6AWcO04Kta1oTo0lkhXwWXQ1XI",
  authDomain: "owldoit-54a72.firebaseapp.com",
  databaseURL: "https://owldoit-54a72.firebaseio.com",
  projectId: "owldoit-54a72",
  storageBucket: "owldoit-54a72.appspot.com",
  messagingSenderId: "1004497354491"
}

@NgModule({
  declarations: [
    AppComponent,


    Profile1Component,
    Profile2Component,
    LoginComponent,

    ProjectFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
