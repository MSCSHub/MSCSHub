import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string = '/'
  error: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) {
    this.auth.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/'])
      }
    })
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm?.controls
  }

  onSubmit() {
    this.submitted = true
    if(this.loginForm?.invalid){
      return
    }

    this.loading = true
    this.auth.signIn(this.f.email.value, this.f.password.value)
      .then(() => {this.loading = false})
      .catch(error => {
        this.loading = false
        this.processError(error)
      })
  }

  processError(error: any): void {
    if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password"){
      this.error = "Your account information was entered incorrectly."
    // } else if(error.code === "auth/wrong-password") {
    } else {
      this.error = error.message
    }
  }

}
