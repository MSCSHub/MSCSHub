import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassData } from 'src/app/shared/class/class';
import { Review } from '../../shared/review/review'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseName: string = ""
  courseNumber: string = ""
  courseId: string = ""
  course!: ClassData
  cards = [
    {title: 'Reviews', subtitle: 'Total Count', value: 0}, 
    {title: 'Rating', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Difficulty', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Workload', subtitle: 'Hours Per Week', value: 0},
    {title: 'Book Usefulness', subtitle: 'On a Scale of 1-7', value: 0},
  ]
  reviewDataStack: any[] = []
  reviewData: Review[] = []
  pageNumber: number = 0
  disableNext: boolean = false
  disablePrev: boolean = false
  pageLength: number = 5
  maxLength: number = 99999
  isLoggedIn: boolean = false

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('id') || ""
    this.auth.isLoggedIn.subscribe(state => {this.isLoggedIn = state})
    this.getClassData()
  }

  getClassData(): void {
    let docRef = this.afs.collection('Class', ref => ref.where("ClassName", "==", this.courseName))
    let x = docRef.get().subscribe((ss) => {
      if (ss.docs.length === 1) {
        this.course = ss.docs[0].data() as ClassData
        this.courseId = ss.docs[0].id
        this.courseNumber = this.course.CourseNumber
        this.updateCards()
        this.getFirstPage()
      }
    })
  }

  getFirstPage() {
    this.disablePrev = true
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy("timestamp","desc")
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        this.disablePrev = true
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber = 0
      if (response.docs.length < 5) {
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  nextPage() {
    this.disablePrev = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy("timestamp","desc")
      .startAfter(lastReview)
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        return
      }
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber++
      if (response.docs.length < 5 || this.reviewData.length >= this.course.RatingCount) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  getPrevPage(): void {
    this.pageNumber--
    this.disableNext = false
    console.log("Previous", this.pageNumber)
    if (this.pageNumber === 0) {
      this.disablePrev = true
    }
  }

  getNextPage(): void {
    this.disablePrev = false
    if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
      this.nextPage()
    } else { this.pageNumber++ }
    console.log(this.pageNumber * this.pageLength)
    console.log(this.maxLength)
    if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
      this.disableNext = true
    }
  }

  updateCards(): void {
    this.cards[0].value = this.course.RatingCount
    this.cards[1].value = this.course.RatingAvg
    this.cards[2].value = this.course.DifficultyAvg
    this.cards[3].value = this.course.WorkloadAvg
    this.cards[4].value = this.course.BookUsefulnessAvg
  }
}
