import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-nodes',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public currentUrl: string = ''
  isLoggedIn: boolean = false
  navInfo = {
    reviews: {
      title: 'Reviews',
      url: '/reviews',
    },
    courses: {
      title: 'Courses',
      url: '/courses',
    },
    login: {
      title: 'Login',
      url: '/login',
    },
    logout: {
      title: 'Log Out',
      url: '/logout',
    },
    settings: {
      title: 'User Settings',
      url: '/settings',
    },
    home: {
      title: 'Home',
      url: '/home'
    }
  }

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    // this.currentUrl = location.pathname
    // console.log(this.location.path(), location)
    this.router.events.subscribe((val) => {
      this.currentUrl = this.location.path();
    });

  }
  
}
