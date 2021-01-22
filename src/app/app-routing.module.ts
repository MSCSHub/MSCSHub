import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseGridComponent } from './courses/course-grid/course-grid.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AdminComponent } from './user/admin/admin.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SettingsComponent } from './user/settings/settings.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'courses',
    component: CourseGridComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'review/:id',
    component: ReviewDetailComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'passwordReset',
    component: ForgotPasswordComponent,
  },
  {
    path: 'verifyEmail',
    component: VerifyEmailComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
