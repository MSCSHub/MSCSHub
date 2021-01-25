import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  courseIdMap: {[name: string]: string} = {
    LtqCakwjwdiFOGl8yU54: "Optimization",
    XJA6C9NpHHfQLlko43h5: "Advanced Linear Algebra for Computation",
    lIhA8jNKBcBKCyEspVeg: "Advanced Operating Systems",
  }
  maxLength = 99999
  // courseData!: ClassData[]

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.getFirstPage()
  }

  getFirstPage() {
    this.disablePrev = true
    this.afs.collection('Reviews', ref => ref
      .limit(this.pageLength)
      .orderBy("rating","desc")
    ).get().subscribe(response => {
      console.log(response)
      console.log(response.docs)
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
      if (this.reviewData.length < 5) {
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  nextPage() {
    this.disablePrev = false
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
}
