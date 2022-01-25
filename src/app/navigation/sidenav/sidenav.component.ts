import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() routeSelected: EventEmitter<any> = new EventEmitter
  isLoggedIn: boolean = false
  links = {
    a_home: {title: "Home", link: "/", show: true},
    b_courses: {title: "Courses", link: "/courses", show: true},
    c_courses_map: {title: "Course Map", link: "/courseMap", show: true},
    d_reviews: {title: "Reviews", link: "/reviews", show: true},
    e_create: {title: "Create Review", link: "/createReview", show: true},
    f_settings: {title: "User Profile", link: "/settings", show: this.isLoggedIn},
    g_myReviews: {title: "My Reviews", link: "/user/reviews", show: this.isLoggedIn},
    h_logout: {title: "Log Out", link: "/logout", show: this.isLoggedIn},
    i_login: {title: "Log In", link: "/login", show: !this.isLoggedIn},
    // j_faq: {title: "FAQ", link:"/faq", show: true},
  }

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(state => {
      this.isLoggedIn = state
      this.updateLinkStatus()
    })
  }

  updateLinkStatus(): void {
    this.links.f_settings.show = this.isLoggedIn
    this.links.g_myReviews.show = this.isLoggedIn
    this.links.h_logout.show = this.isLoggedIn
    this.links.i_login.show = !this.isLoggedIn
  }

  closeDrawer(): void {
    this.routeSelected.emit()
  }
}
