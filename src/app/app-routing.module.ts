import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {path: 'home', component: DashboardComponent},
  {path: 'courses', component: CourseGridComponent},
  {path: 'courses/:id', component: CourseDetailComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'review/:id', component: ReviewDetailComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'logout', redirectTo: '/home', pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'passwordReset', component: ForgotPasswordComponent},
  {path: 'verifyEmail', component: VerifyEmailComponent},
  {path: 'admin', component: AdminComponent},
  // {path: 'feedback', component: FeedbackComponent},
  // {path: 'feedback', redirectTo: 'https://github.com/MSCSHub/MSCSHub/issues/new', pathMatch: 'full'},
  {path: 'createReview', component: CreateReviewComponent, canActivate: [AuthguardGuard]},
  {path: 'user/edit', component: EditComponent, canActivate: [AuthguardGuard]},
  {path: 'user/edit', component: EditComponent, canActivate: [AuthguardGuard]},
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
