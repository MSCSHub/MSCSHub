import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Review } from 'src/app/shared/review/review';
import { FbUser } from 'src/app/shared/user/user';
import {Clipboard, ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  @Input() reviewId: string = ""
  @Input() author: string = ""
  @Input() class: string = ""
  @Input() pageNumber: number = 0
  @Input() query: string = ""
  @Input() pageLength: number = 10
  reviewData: Review[] = []
  isLoggedIn: boolean = false
  userData: FbUser | undefined
  durationInSeconds: number = 3

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(status => {this.isLoggedIn = status})
    this.auth.userData.subscribe(data => {
      this.userData = data
      console.log("Review Detail: userdata uid", this.userData?.uid)
    })
    this.reviewId = this.route.snapshot.paramMap.get('id') || this.reviewId
    if(this.reviewId != ""){this.getSingleReview(this.reviewId)}
  }

  getSingleReview(reviewId: string) {
    this.afs.collection("Reviews").doc(reviewId).get().subscribe(doc => {
      const review = doc.data() as Review
      review.reviewId = doc.id
      this.reviewData.push(review)
      console.log("Review Detail: review uid", this.reviewData[0]?.userId)
    })
  }

  openSnackBar(message: string, action: string = "Dismiss") {
    this.clipboard.copy(window.location.href)
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }


  // getFirstPage() {
  //   this.afs.collection('Reviews', ref => ref
  //     .where("course", '==', this.courseName)
  //     .limit(this.pageLength)
  //     .orderBy("timestamp","desc")
  //   ).get().subscribe(response => {
  //     if (!response.docs.length){
  //       console.log("No reviews exist")
  //       //TODO Add something to let the user know that there are no reviews
  //       this.disableNext = true
  //       this.disablePrev = true
  //       return
  //     }
  //     this.reviewData = []
  //     for (let item of response.docs) {
  //       this.reviewData.push(item.data() as Review)
  //     }
  //     this.reviewDataStack.push(response)
  //     this.pageNumber = 0
  //     if (response.docs.length < 5) {
  //       this.disableNext = true
  //       this.maxLength = this.reviewData.length
  //     }
  //   }, error => {console.log(error)})
  // }

  // nextPage() {
  //   this.disablePrev = false
  //   const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
  //   this.afs.collection('Reviews', ref => ref
  //     .where("course", '==', this.courseName)
  //     .limit(this.pageLength)
  //     .orderBy("timestamp","desc")
  //     .startAfter(lastReview)
  //   ).get().subscribe(response => {
  //     if (!response.docs.length){
  //       console.log("No reviews exist")
  //       //TODO Add something to let the user know that there are no reviews
  //       this.disableNext = true
  //       return
  //     }
  //     for (let item of response.docs) {
  //       this.reviewData.push(item.data() as Review)
  //     }
  //     this.reviewDataStack.push(response)
  //     this.pageNumber++
  //     if (response.docs.length < 5 || this.reviewData.length >= this.course!.RatingCount) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
  //       this.disableNext = true
  //       this.maxLength = this.reviewData.length
  //     }
  //   }, error => {console.log(error)})
  // }

  // getPrevPage(): void {
  //   this.pageNumber--
  //   this.disableNext = false
  //   console.log("Previous", this.pageNumber)
  //   if (this.pageNumber === 0) {
  //     this.disablePrev = true
  //   }
  // }

  // getNextPage(): void {
  //   this.disablePrev = false
  //   if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
  //     this.nextPage()
  //   } else { this.pageNumber++ }
  //   console.log(this.pageNumber * this.pageLength)
  //   console.log(this.maxLength)
  //   if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
  //     this.disableNext = true
  //   }
  // }
}
