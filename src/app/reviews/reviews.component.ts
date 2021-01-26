import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { ClassService } from '../services/classes/class.service';
import { ClassData } from '../shared/class/class';
import { Review } from '../shared/review/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewData: Review[] = []
  reviewDataStack: any[] = []
  pageNumber: number = 0
  pageLength: number = 5
  disableNext: boolean = false
  disablePrev: boolean = false
  maxLength = 99999
  isLoggedIn: boolean = false
  categories: {[key: string]:string} = {
    Rating: "rating", 
    Difficulty: "difficulty", 
    Workload: "workload", 
    "Book Usefulness": 'bookUsefulness'
  }
  operations: string[] = ["==", "!=", "<", ">", "<=", ">="]
  courses: ClassData[] = []
  courseId: string = ''
  queryValid: boolean = false
  queryForm!: FormGroup
  nothingHere: boolean = false

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private classService: ClassService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.queryForm = this.formBuilder.group({
      category: ['', Validators.required],
      operation: ['', Validators.required],
      inputValue: ['', Validators.required],
    })
    this.auth.isLoggedIn.subscribe(state => {this.isLoggedIn = state})
    this.classService.classes.subscribe(data => {this.courses = data})
    this.getFirstPage()
  }

  getFirstPage() {
    this.disablePrev = true
    let docRef = this.afs.collection('Reviews', ref => ref
      .limit(this.pageLength)
      .orderBy("timestamp","desc")
    )
    this.afs.collection('Reviews', ref => {
      let query = ref.limit(this.pageLength)
      if(this.courseId) {query = query.where("classId", "==", this.courseId)}
      if(this.queryValid) {
        query = query.where(this.f['category'].value, this.f['operation'].value, this.f['inputValue'].value)
        if (this.f['operation'].value != "==") {query = query.orderBy(this.f['category'].value, "desc")}
      }
      return query.orderBy('timestamp', 'desc')
    }).get().subscribe(response => {
      console.log(response)
      console.log(response.docs)
      if (!response.docs.length){
        console.log("No reviews exist")
        this.disableNext = true
        this.disablePrev = true
        this.reviewData = []
        this.nothingHere = true
        //TODO Add a material dialog here to let the user know that there are no reviews
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber = 0
      if (this.reviewData.length < 5) {
        console.log("NEXT DISABLED DUE TO REVIEW DATA LENGTH")
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  nextPage() {
    this.disablePrev = false
    this.nothingHere = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
    this.afs.collection('Reviews', ref => ref
      .limit(this.pageLength)
      .orderBy("rating","desc")
      .startAfter(lastReview)
    ).get().subscribe(response => {
      console.log(response)
      console.log(response.docs)
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        return
      }
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.pageNumber++
      this.reviewDataStack.push(response)
      if (response.docs.length < 5) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  getPrevPage(): void {
    this.pageNumber--
    this.disableNext = false
  }

  getNextPage(): void {
    if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
      this.nextPage()
    } else { this.pageNumber++ }
    if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
      this.disableNext = true
    }
  }

  onCourseChange(value: any): void {
    console.log(value)
    this.courseId = value
    this.getFirstPage()
  }

  get f() {
    return this.queryForm.controls
  }

  onQuerySubmit(): void {
    console.log("Submitted!")
    console.log(this.queryForm.valid)
    console.log(this.queryForm.value)
    if(this.queryForm.valid){
      this.queryValid = true
      this.getFirstPage()
    }
  }
}
