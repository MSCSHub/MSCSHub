import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-nodes',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, FlexLayoutModule, MatIconModule]
})
export class MenuComponent implements OnInit {
  public currentUrl: string = ''
  isLoggedIn: boolean = false
  navInfo = {
    reviews: {title: 'Reviews', url: '/reviews'},
    courses: {title: 'Courses', url: '/courses'},
    login: {title: 'Login', url: '/login'},
    logout: {title: 'Log Out', url: '/logout'},
    settings: {title: 'User Profile', url: '/settings'},
    home: {title: 'Home', url: '/home'},
    register: {title: 'Register', url: '/register'},
    createReview: {title: 'Create Review', url: '/createReview'},
    faq: {title: 'FAQ', url: '/faq'},
    map: {title: 'Course Map', url: '/courseMap'}
  }

  constructor(
    private router: Router,
    private location: Location,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.currentUrl = this.location.path();
    });
    this.auth.isLoggedIn.subscribe(state => {
      this.isLoggedIn = state
    })
  }

  logout() {
    this.auth.logout()
  }
}
