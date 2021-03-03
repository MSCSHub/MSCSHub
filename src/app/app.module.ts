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
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseCardComponent } from './courses/course-detail/course-card/course-card.component';
import { CourseGridComponent } from './courses/course-grid/course-grid.component';
import { CourseGridCardComponent } from './courses/course-grid/course-grid-card/course-grid-card.component';
import { CourseGridImageComponent } from './courses/course-grid/course-grid-image/course-grid-image.component';
import { LogoutComponent } from './user/logout/logout.component';
import { FeedbackComponent, DialogOnSubmission } from './feedback/feedback.component';
import { CreateReviewComponent, DialogReviewSubmission } from './reviews/create-review/create-review.component';
import { DialogNotLoggedIn } from './shared/dialog/not-logged-in/dialog-not-logged-in.component';
import { DialogSendFeedback } from './shared/dialog/send-feedback/dialog-send-feedback.component';
import { EditComponent } from './user/edit/edit.component';
import { ViewUserReviewsComponent } from './user/view-user-reviews/view-user-reviews.component';
import { EditCourseMetadataComponent } from './courses/course-detail/edit-course-metadata/edit-course-metadata.component';

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
    CourseListComponent,
    CourseCardComponent,
    CourseGridComponent,
    CourseGridCardComponent,
    CourseGridImageComponent,
    LogoutComponent,
    FeedbackComponent,
    DialogOnSubmission,
    CreateReviewComponent,
    DialogReviewSubmission,
    DialogNotLoggedIn,
    DialogSendFeedback,
    EditComponent,
    ViewUserReviewsComponent,
    EditCourseMetadataComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
