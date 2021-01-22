import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'

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
import { environment } from '../environments/environment';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { SingleClassReviewsComponent } from './single-class-reviews/single-class-reviews.component'
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseCardComponent } from './courses/course-detail/course-card/course-card.component';


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
    CourseDetailComponent,
    ReviewDetailComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SingleClassReviewsComponent,
    CourseListComponent,
    CourseCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([{path: 'courses/:courseId', component: SingleClassReviewsComponent}]),
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
