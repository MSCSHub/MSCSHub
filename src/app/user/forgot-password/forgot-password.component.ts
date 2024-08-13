import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatCardModule, ReactiveFormsModule]
})
export class ForgotPasswordComponent implements OnInit {
  error: any
  loading: boolean = false
  submitted: boolean = false
  resetForm!: FormGroup

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.auth.forgotPassword(this.resetForm.controls['email'].value)
  }
}
