import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconModule } from '@angular/material/icon'
import { MaterialModule } from './material/material.module'
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { LoginComponent } from './user/login/login.component';
import { SettingsComponent } from './user/settings/settings.component';
import { AdminComponent } from './user/admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { ReviewsComponent } from './reviews/reviews.component';


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
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent,
    SettingsComponent,
    AdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
