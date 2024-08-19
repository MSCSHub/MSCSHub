import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, FlexLayoutModule, MatButtonModule, MatInputModule]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string = '/'
  error: string = ''
  emailRegex: string = "^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?utexas\.edu"
  semesters: string[] = []

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstSemester: ['', Validators.required],
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/verifyEmail';
    this.getSemesterList()
  }

  get f() {
    return this.registerForm?.controls
  }

  getSemesterList() {
    let semesterNames: string[] = ["Spring", "Fall"]
    let currentYear: number = (new Date()).getFullYear()
    let years: number[] = [currentYear, currentYear-1, currentYear-2, currentYear-3]
    
    years.forEach(year => {
      semesterNames.forEach(semester => {
        this.semesters.push(`${semester} ${year}`)
      })
    })
  }

  onSubmit() {
    this.submitted = true
    if(this.registerForm?.invalid){
      return
    }
    this.loading = true
    this.auth.signUp(this.f.email.value, 
                     this.f.password.value, 
                     this.f.firstName.value, 
                     this.f.lastName.value,
                     this.f.firstSemester.value)
      .then(() => {this.loading = false})
      .catch(error => {
        this.loading = false
        this.error = error
      })
  }
}
