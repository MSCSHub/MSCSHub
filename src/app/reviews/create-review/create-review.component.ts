import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { Review } from 'src/app/shared/review/review';
import { FbUser } from 'src/app/shared/user/user';

@Component({
  selector: 'dialog-review-sumission-dialog',
  templateUrl: 'dialog-review-submission-dialog.html',
})
export class DialogReviewSubmission {}

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  headerText: string = "Create New Review"
  reviewId: string = ""
  error: any
  loading: boolean = false
  submitted: boolean = false
  pros: string[] = ["test"]
  cons: string[] = []
  semesters: string[] = ["Spring", "Summer", "Fall"]
  currentYear: number = (new Date()).getFullYear()
  years: number[] = [this.currentYear, this.currentYear-1, this.currentYear-2]
  courses: ClassData[] | undefined
  reviewForm: FormGroup = new FormGroup({})
  completedReviews: string[] = []
  userData: FbUser | undefined

  constructor(
    private courseService: ClassService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public dialog: MatDialog,
    private afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.reviewId = this.route.snapshot.paramMap.get('id') || ""
    this.courseService.classes.subscribe(data => this.courses = data)
    this.auth.userData.subscribe(data => {
      this.userData = data
      this.getUserReviews()
    })
    this.initializeReviewForm()
    this.loadReview()
  }

  loadReview() {
    if(this.reviewId){
      this.headerText = "Edit Review"
      this.afs.collection("Reviews").doc(this.reviewId).get().subscribe(doc => {
        this.reviewForm.setValue(doc.data() as Review)
      })
      this.f.course.disable()
    }
  }

  getUserReviews(): void {
    this.afs.collection('Reviews', ref => 
      ref.where("userId", '==', this.userData?.uid)
    ).get().subscribe(response => {
      if (!response.docs.length){
        return
      }
      this.completedReviews = []
      for (let item of response.docs) {
        const review = item.data() as Review
        this.completedReviews.push(review.course)
      }
    }, error => {console.log(error)})
  }

  initializeReviewForm() {
    this.reviewForm = this.formBuilder.group({
      title: ['', Validators.required],
      course: ['', Validators.required],
      semester: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(2099), Validators.min(2019)]],
      review: ['Pros:\n1. \n2. \n3. \n\nCons:\n1. \n2. \n3. \n\nOverall:\n', Validators.required],
      rating: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      difficulty: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      workload: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      bookUsefulness: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      lectureQuality: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      professorQuality: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      piazzaCommunity: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      userId: ['', Validators.required],
      timestamp: [new Date(), Validators.required],
      classId: ['', Validators.required]
    })
    this.reviewForm.controls['timestamp'].setValue(new Date())
    this.auth.userData.subscribe(user => {
      this.reviewForm.controls['userId'].setValue(user.uid)
    })
  }

  get f() {
    return this.reviewForm?.controls
  }

  onSubmit() {
    const courseName = this.reviewForm.controls['course'].value
    const classId = this.courses?.find(item => item.ClassName === courseName)?.courseId
    this.reviewForm.controls['classId'].setValue(classId)
    this.submitted = true
    if(this.reviewForm?.invalid){
      console.log(this.reviewForm.errors)
      console.log(this.reviewForm)
      return
    }
    this.loading = true
    if(this.reviewId) {
      this.afs.collection('Reviews')
        .doc(this.reviewId)
        .update(this.reviewForm.value)
        .then(result => {
          this.loading = false
          this.openDialog()
        }, error => console.log("Submission failed:", error))
    } else {
      this.afs.collection('Reviews')
        .add(this.reviewForm.value)
        .then(result => {
          this.loading = false
          this.openDialog()
        }, error => console.log("Submission failed:", error))
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogReviewSubmission)
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['courses', this.reviewForm.controls['course'].value])
    })
  }
}
