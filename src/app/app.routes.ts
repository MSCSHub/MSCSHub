import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseGridComponent } from './courses/course-grid/course-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreateReviewComponent } from './reviews/create-review/create-review.component';
import { AdminComponent } from './user/admin/admin.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SettingsComponent } from './user/settings/settings.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { AuthguardGuard } from './user/authguard.guard';
import { LogoutComponent } from './user/logout/logout.component';
import { EditComponent } from './user/edit/edit.component';
import { ViewUserReviewsComponent } from './user/view-user-reviews/view-user-reviews.component';
import { EditCourseMetadataComponent } from './courses/course-detail/edit-course-metadata/edit-course-metadata.component';
import { SadPandaComponent } from './misc/sad-panda/sad-panda.component';
import { ThankyouComponent } from './misc/thankyou/thankyou.component';
import { NothingHereComponent } from './misc/nothing-here/nothing-here.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { CourseListViewComponent } from './courses/course-list-view/course-list-view.component';
import { FaqEditComponent } from './faq/faq-edit/faq-edit.component';
import { FaqPageComponent } from './faq/faq-page/faq-page.component';
import { FaqEntryComponent } from './faq/faq-entry/faq-entry.component';
import { CourseMapComponent } from './courses/course-map/course-map.component';

export const APP_ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'courses', component: CourseListViewComponent},
  {path: 'courses/create', component: CreateCourseComponent},
  {path: 'courses/:courseId', component: CourseDetailComponent},
  {path: 'courses/edit/:courseId', component: EditCourseMetadataComponent, canActivate: [AuthguardGuard]},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'review/:id', component: ReviewDetailComponent},
  {path: 'review/edit/:id', component: CreateReviewComponent},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthguardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'passwordReset', component: ForgotPasswordComponent},
  {path: 'verifyEmail', component: VerifyEmailComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'createReview', component: CreateReviewComponent, canActivate: [AuthguardGuard]},
  {path: 'createReview/:className', component: CreateReviewComponent, canActivate: [AuthguardGuard]},
  {path: 'user/edit', component: EditComponent, canActivate: [AuthguardGuard]},
  {path: 'user/reviews', component: ViewUserReviewsComponent, canActivate: [AuthguardGuard]},
  {path: 'faq', component: FaqPageComponent},
  {path: 'faq/view/:entryId', component: FaqEntryComponent},
  {path: 'faq/edit/:entryId', component: FaqEditComponent},
  {path: 'faq/create', component: FaqEditComponent},
  {path: 'sadPanda', component: SadPandaComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: 'courseMap', component: CourseMapComponent},
  {path: '**', component: NothingHereComponent},
];
