import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, ReactiveFormsModule, FlexLayoutModule, MatButtonModule, MatInputModule, RouterModule]
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
      this.error = "Unknown Error Occurred"
    }
  }

}
