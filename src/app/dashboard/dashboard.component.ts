import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FbUser } from '../shared/user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean = false
  user: FbUser | undefined
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(state => {
      this.isLoggedIn = state
    })
    this.auth.userData.subscribe(userData => {
      this.user = userData
    })
    // this.isLoggedIn = this.auth.isLoggedIn
    // this.user = this.auth.userData
  }

}
