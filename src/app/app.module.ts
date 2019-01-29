import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';

@NgModule({
  declarations: [
    AppComponent,
    Profile1Component,
    Profile2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
