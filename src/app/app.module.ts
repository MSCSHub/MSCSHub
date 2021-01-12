import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { MenuComponent } from './navigation/navbar/menu/menu.component';
import { LoginComponent } from './user/login/login.component';
import { SettingsComponent } from './user/settings/settings.component';
import { AdminComponent } from './user/admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewsComponent } from './reviews/reviews.component';

// Firebase
import { AngularFireModule } from "@angular/fire"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SearchInputComponent,
    MenuComponent,
    LoginComponent,
    SettingsComponent,
    AdminComponent,
    CoursesComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  // entryComponents: [
  //   LoginComponent,
  //   SettingsComponent,
  //   AdminComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
