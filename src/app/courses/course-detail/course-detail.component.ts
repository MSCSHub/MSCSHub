import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { ClassData } from 'src/app/shared/class/class';
import { MatGridList } from '@angular/material/grid-list';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
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
  reviewData: Review[] = []
  reviewFirst?: any
  reviewLast?: any

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
        this.getReviews()
      }
    })
  }

  getReviews(): void {
    let docRef = this.afs.collection('Reviews', ref => 
      ref.where("ClassId", '==', this.courseId)
         .limit(5)
      //  .orderBy('timestamp','desc')
    )
    let x = docRef.snapshotChanges().subscribe(response => {
      console.log(response)
      if (!response.length) {
        console.log("No data available")
        return
      }
      // this.reviewFirst = response[0].payload.doc
      // this.reviewLast = response[response.length - 1].payload.doc
      this.reviewData = []
      for (let review of response) {
        this.reviewData.push(review.payload.doc.data() as Review)
      }
      console.log(this.reviewData)
    })
  }

  updateCards(): void {
    this.cards[0].value = this.course.RatingCount
    this.cards[1].value = this.course.RatingAvg
    this.cards[2].value = this.course.DifficultyAvg
    this.cards[3].value = this.course.WorkloadAvg
    this.cards[4].value = this.course.BookUsefulnessAvg
  }
}
