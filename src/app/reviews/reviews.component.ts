import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { ClassService } from '../services/classes/class.service';
import { ClassData } from '../shared/class/class';
import { Review, degreeProgram } from '../shared/review/review';
import firebase from 'firebase/app'

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
  orderByOptions = [
    {displayText: "Most Helpful", field: "wilsonScore", order: "desc"},
    {displayText: "Least Helpful", field: "wilsonScore", order: "asc"},
    {displayText: "Newest", field: "timestamp", order: "desc"},
    {displayText: "Oldest", field: "timestamp", order: "asc"},
  ]
  selectedSort: {displayText: string, field: string, order: string} = this.orderByOptions[2]
  websiteFilter: string = this.classService.website === "computerScience" ? "isComputerScience" : "isDataScience"

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
    this.pageNumber = 0
    this.disablePrev = true
    this.disableNext = false
    this.nothingHere = false
    this.afs.collection('Reviews', ref => {
      let query = ref.limit(this.pageLength)
      if(this.courseId) {query = query.where("classId", "==", this.courseId)}
      query = query.where(this.websiteFilter, "==", true) 
      if(this.queryValid) {
        query = query.where(this.f['category'].value, this.f['operation'].value, this.f['inputValue'].value)
        if (this.f['operation'].value != "==") {query = query.orderBy(this.f['category'].value, "desc")}
      }
      return query.orderBy(this.selectedSort.field, this.selectedSort.order as firebase.firestore.OrderByDirection)
    }).get().subscribe(response => {
      if (!response.docs.length){
        console.warn("Reviews: No reviews exist")
        this.disableNext = true
        this.disablePrev = true
        this.reviewData = []
        this.nothingHere = true
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber = 0
      if (this.reviewData.length < 5) {
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.error("Reviews:", error)})
  }

  nextPage() {
    this.disablePrev = false
    this.nothingHere = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
    this.afs.collection('Reviews', ref => {
      let query = ref.limit(this.pageLength)
      if(this.courseId) {query = query.where("classId", "==", this.courseId)}
      query = query.where(this.websiteFilter, "==", true) 
      if(this.queryValid) {
        query = query.where(this.f['category'].value, this.f['operation'].value, this.f['inputValue'].value)
        if (this.f['operation'].value != "==") {query = query.orderBy(this.f['category'].value, "desc")}
      }
      return query.orderBy('timestamp', 'desc').startAfter(lastReview)
    }).get().subscribe(response => {
      if (!response.docs.length){
        console.warn("Reviews:", "No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        return
      }
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
      this.pageNumber++
      this.reviewDataStack.push(response)
      if (response.docs.length < 5) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.error("Reviews:", error)})
  }

  getPrevPage(): void {
    this.pageNumber--
    this.disableNext = false
    this.goToLocation("review-spacer")
  }

  getNextPage(): void {
    if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
      this.nextPage()
    } else { this.pageNumber++ }
    if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
      this.disableNext = true
    }
    this.goToLocation("review-spacer")
  }

  onCourseChange(value: any): void {
    this.courseId = value
    this.getFirstPage()
  }

  get f() {
    return this.queryForm.controls
  }

  onQuerySubmit(): void {
    if(this.queryForm.valid){
      this.queryValid = true
      this.getFirstPage()
    }
  }

  goToLocation(location: string): void {
    window.location.hash = ""
    window.location.hash = location
    let x = document.getElementsByClassName("mat-drawer-content")[0]
    x.scroll(0, x.scrollTop - 80)
  }

  newSort(event: any): void {
    this.getFirstPage()
  }
}
