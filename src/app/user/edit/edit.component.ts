import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FbUser } from 'src/app/shared/user/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editUserDataForm!: FormGroup
  userData: FbUser | undefined
  userInfo = {
    a_firstName: {name: "firstName", displayName: "First Name", value: "Test Name", is_input: true},
    b_lastName: {name: "lastName", displayName: "Last Name", value: "Name Test", is_input: true},
    c_firstSemester: {name: "firstSemester", displayName: "First Semester", value: "Fall 2020", is_input: false}
  }
  Semesters = [
    'Fall 2019',
    'Spring 2020',
    'Fall 2020',
    'Spring 2021'
  ]

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.editUserDataForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstSemester: ['', Validators.required],
    })
    this.auth.userData.subscribe(user => {
      this.userData = user
      this.userInfo.a_firstName.value = user.firstName || 'null'
      this.userInfo.b_lastName.value = user.lastName || 'null'
      this.userInfo.c_firstSemester.value = user.firstSemester || 'null'
      this.f.firstName.setValue(user.firstName)
      this.f.lastName.setValue(user.lastName)
      this.f.firstSemester.setValue(user.firstSemester)
    })
  }

  get f() {
    return this.editUserDataForm?.controls
  }

  onSubmit(): void {
    if(this.f.invalid){
      return
    }
    this.auth.updateUserExtraData(
      this.f.firstName.value,
      this.f.lastName.value,
      this.f.firstSemester.value
    )
  }
}
