import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
