import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
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
    {title: 'Book Usefulness', subtitle: 'On a Scale of 1-7', value: 0}
  ]
  reviewDataStack: any[] = []
  reviewData: Review[] = []
  firstReviewResponse: any = []
  lastReviewResponse: any = []
  prev_start_at: any = []
  page_number: number = 0
  disable_next: boolean = false
  disable_prev: boolean = false
  page_length: number = 5

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.getClassData()
  }

  getClassData(): void {
    this.courseName = this.route.snapshot.paramMap.get('id') || ""
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
    this.disable_prev = true
    this.afs.collection('Reviews', ref => ref
      .where("ClassId", '==', this.courseId)
      .limit(this.page_length)
      .orderBy("Rating","desc")
    ).get().subscribe(response => {
      console.log(response)
      console.log(response.docs)
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disable_next = true
        this.disable_prev = true
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.reviewDataStack.push(response)
      this.page_number = 0
      if (this.reviewData.length < 5) {
        this.disable_next = true
      }
    }, error => {console.log(error)})
  }

  nextPage() {
    this.disable_prev = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.page_length-1]
    this.afs.collection('Reviews', ref => ref
      .where("ClassId", '==', this.courseId)
      .limit(this.page_length)
      .orderBy("Rating","desc")
      .startAfter(lastReview)
    ).get().subscribe(response => {
      console.log(response)
      console.log(response.docs)
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disable_next = true
        return
      }
      for (let item of response.docs) {
        this.reviewData.push(item.data() as Review)
      }
      this.reviewDataStack.push(response)
      // this.page_number++
      if (response.docs.length < 5 || this.reviewData.length >= this.course.RatingCount) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
        this.disable_next = true
      }
    }, error => {console.log(error)})
  }

  getPrevPage(): void {
    this.page_number--
  }

  getNextPage(): void {
    this.page_number++
    if(this.page_number * this.page_length >= this.reviewData.length) {
      this.nextPage()
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
