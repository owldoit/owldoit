import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { LoginComponent } from './login/login.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { Profile1formsComponent } from './profile1/profile1forms/profile1forms.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AllProjectsComponent } from './projects/all-projects/all-projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    Profile1Component,
    Profile2Component,
    LoginComponent,
    LandingPageComponent,
    ProjectFormComponent,
    AllProjectsComponent,
    Profile1formsComponent
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
