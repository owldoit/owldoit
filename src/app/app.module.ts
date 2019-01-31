import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';


@NgModule({
  declarations: [
    AppComponent,

    Profile1Component,
    Profile2Component,
    ProjectFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
