import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FbUser } from '../shared/user/user';

@Component({
  selector: 'dialog-on-sumission-dialog',
  templateUrl: 'dialog-on-submission-dialog.html',
})
export class DialogOnSubmission {}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string = '/'
  error: string = ''
  feedbackTypes: string[] = [
    "Bug Report",
    "Feature Request",
    "Missing Class",
    "Other"
  ]
  userData!: FbUser

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required],
      userData: ['', Validators.required],
      timestamp: [new Date(), Validators.required]
    })
    this.auth.userData.subscribe(user => {
      this.feedbackForm.controls['userData']
        .setValue(JSON.stringify([user.displayName, user.email]))
    })
  }

  get f() {
    return this.feedbackForm?.controls
  }

  onSubmit() {
    this.submitted = true
    if(this.feedbackForm?.invalid){
      return
    }
    this.loading = true
    this.afs.collection('Feedback')
      .add(this.feedbackForm.value)
      .then(result => {
        console.log("Submission result:", result)
        this.loading = false
        this.openDialog()
      }, error => console.log("Submission failed:", error))
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOnSubmission)
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed!", result)
      this.router.navigate(['home'])
    })
  }
}
