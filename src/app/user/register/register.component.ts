import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string = '/'
  error: string = ''
  Semesters = [
    'Fall 2019',
    'Spring 2020',
    'Fall 2020',
    'Spring 2021'
  ]

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/verifyEmail';

  }

  get f() {
    return this.registerForm?.controls
  }

  onSubmit() {
    this.submitted = true
    if(this.registerForm?.invalid){
      return
    }

    this.loading = true
    this.auth.signUp(this.f.email.value, this.f.password.value, this.f.firstName.value, this.f.lastName.value)
      // .then(() => {this.loading = false})
      .catch(error => {
        this.loading = false
        this.error = error
      })
  }

}
