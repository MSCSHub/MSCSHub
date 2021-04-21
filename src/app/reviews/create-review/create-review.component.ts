import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { DialogReviewSubmission } from 'src/app/shared/dialog/review-submission/dialog-review-submission.component';
import { DialogReviewTooShort } from 'src/app/shared/dialog/review-too-short/dialog-review-too-short.component';
import { Review } from 'src/app/shared/review/review';
import { FbUser } from 'src/app/shared/user/user';

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
  scaleTooltip = `
    You know how people say: "on a scale of 1-10"?\n
    I've used the principle of Millers law to start asking people to measure on a scale of 1-7.\n
    Universally, people balk at the scale. But I explain to them that most people can't tell the difference between 2 and 3 or a 6 and 7 on a ten point scale. If you can't articulate a difference, there's no use in the measurement.\n
    Seven is great because you get more than the simplicity of 1-5 and can be a better reflection of your true evaluation.
  `
  fields = [
    {formName: "workload", title: "Workload", min: "1", max: "50", hint: "How many hours per week did this class require?"},
    {formName: "rating", title: "Rating", min: "1", max: "7", hint: "Rate the class overall on a scale of 1-7"},
    {formName: "difficulty", title: "Difficulty", min: "1", max: "7", hint: "How difficult was this class on a scale of 1-7? 1 = Easiest, 7 = Hardest"},
    {formName: "bookUsefulness", title: "Textbook Usefulness", min: "0", max: "7", hint: "How usefull was the textbook on a scale of 1-7? Use 0 if there was no textbook."},
    {formName: "lectureQuality", title: "Lecture Quality", min: "1", max: "7", hint: "Rate the quality of the lectures on a scale of 1-7"},
    {formName: "professorQuality", title: "Professor Quality", min: "1", max: "7", hint: "Rate the aggregate quality of the professor(s) on a scale of 1-7"},
    {formName: "piazzaCommunity", title: "Piazza Support", min: "1", max: "7", hint: "Rate your experience with piazza community for this class on a scale of 1-7"},
  ]
  recommendedWordCount: number = 100
  wordCountEnforced: boolean = true
  
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
    this.courseService.classes.subscribe(data => {
      this.courses = data
      this.courses.sort((a,b) => (a.ClassName > b.ClassName) ? 1 : -1)
    })
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
      if (!response.docs.length) return
      this.completedReviews = []
      for (let item of response.docs) {
        const review = item.data() as Review
        this.completedReviews.push(review.course)
      }
    }, error => {console.error("Create Review:", error)})
  }

  initializeReviewForm() {
    this.reviewForm = this.formBuilder.group({
      title: ['', Validators.required],
      course: ['', Validators.required],
      semester: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(2099), Validators.min(2019)]],
      review: ['Pros:\n1. \n2. \n3. \n\nCons:\n1. \n2. \n3. \n\nDetailed Review:\n', Validators.required],
      rating: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
      difficulty: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
      workload: ['', [Validators.required, Validators.max(100), Validators.min(1)]],
      bookUsefulness: ['', [Validators.required, Validators.max(7), Validators.min(0)]],
      lectureQuality: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
      professorQuality: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
      piazzaCommunity: ['', [Validators.required, Validators.max(7), Validators.min(1)]],
      userId: ['', Validators.required],
      timestamp: [new Date(), Validators.required],
      classId: ['', Validators.required],
      helpfulPositive: [1, Validators.required],
      helpfulNegative: [0, Validators.required],
      wilsonScore: [0.8, Validators.required],
      lastUpdated: [''],
      degreeProgram: [''],
      isComputerScience: [this.courseService.website === "computerScience" ? true : false],
      isDataScience: [this.courseService.website === "dataScience" ? true : false]
    })
    this.reviewForm.controls['timestamp'].setValue(new Date())
    this.auth.userData.subscribe(user => {
      this.reviewForm.controls['userId'].setValue(user.uid)
    })
  }

  get f() {
    return this.reviewForm?.controls
  }

  addCourseDegreeType(courseName: string): void {
    let reviewedCourse = this.courses?.filter(course => course.ClassName === courseName)
    if(!reviewedCourse?.length) return
    let course = reviewedCourse[0]
    this.f.isComputerScience.setValue(course.computerScience.isComputerScience)
    this.f.isDataScience.setValue(course.dataScience.isDataScience)
    if(course.dataScience.isDataScience && course.computerScience.isComputerScience) this.f.degreeProgram.setValue(3)
    else if(course.dataScience.isDataScience) this.f.degreeProgram.setValue(2)
    else if(course.computerScience.isComputerScience) this.f.degreeProgram.setValue(1)
    else this.f.degreeProgram.setValue(0)
  }
    
  countWords(s: string){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function(str){return str!="";}).length;
  }

  onSubmit() {
    const courseName = this.reviewForm.controls['course'].value
    const classId = this.courses?.find(item => item.ClassName === courseName)?.courseId
    this.reviewForm.controls['classId'].setValue(classId)
    this.submitted = true
    if(this.reviewForm?.invalid){
      this.error = this.reviewForm.errors
      return
    }
    this.addCourseDegreeType(courseName)
    if(this.wordCountEnforced && this.countWords(this.f.review.value as string) < this.recommendedWordCount) {
      this.openShortReviewDialog()
      return
    }
    this.loading = true
    if(this.reviewId) {
      this.afs.collection('Reviews')
        .doc(this.reviewId)
        .update(this.reviewForm.value)
        .then(result => {
          this.loading = false
          this.openSubmittedDialog()
        }, error => {
          console.error("Create Review: Submission failed - ", error)
          this.loading = false
          this.error = error.message
        })
    } else {
      this.afs.collection('Reviews')
        .add(this.reviewForm.value)
        .then(result => {
          this.loading = false
          this.openSubmittedDialog()
        }, error => {
          console.error("Create Review: Submission failed -", error)
          this.loading = false
          this.error = error.message
        })
    }
  }

  openSubmittedDialog() {
    this.courseService.updateCourseData()
    const dialogRef = this.dialog.open(DialogReviewSubmission)
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['courses', this.reviewForm.controls['course'].value])
    })
  }

  openShortReviewDialog() {
    const dialogRef = this.dialog.open(DialogReviewTooShort)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.wordCountEnforced = result
      if(result) {
        window.location.hash = ""
        window.location.hash = "reviewTooShort"
      }
    })
  }
}
