import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FbUser, User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  links: {[key: string]:string} = {
    "Edit my information": "/user/edit",
    "View my reviews": "/user/reviews"
  }
  userInfo = {
    a_email: {name: "email", displayName: "Email", value: "test@test.com"},
    b_firstName: {name: "firstName", displayName: "First Name", value: "Test Name"},
    c_lastName: {name: "lastName", displayName: "Last Name", value: "Name Test"},
    d_firstSemester: {name: "firstSemester", displayName: "First Semester", value: "Fall 2020"}
  }
  userData: FbUser | undefined

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.userData.subscribe(user => {
      this.userData = user
      this.userInfo.a_email.value = user.email || 'null',
      this.userInfo.b_firstName.value = user.firstName || 'null'
      this.userInfo.c_lastName.value = user.lastName || 'null'
      this.userInfo.d_firstSemester.value = user.firstSemester || 'null'
    })
  }
}
