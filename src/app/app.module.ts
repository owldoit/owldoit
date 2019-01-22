import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile } from './profile/profile.component.html/profile.component.html.component';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    Profile.Component.HtmlComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
