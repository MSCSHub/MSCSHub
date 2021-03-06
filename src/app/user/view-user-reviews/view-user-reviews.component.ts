import {Clipboard} from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassService } from 'src/app/services/classes/class.service';
import { Review } from 'src/app/shared/review/review';
import { FbUser } from 'src/app/shared/user/user';


@Component({
  selector: 'app-view-user-reviews',
  templateUrl: './view-user-reviews.component.html',
  styleUrls: ['./view-user-reviews.component.scss']
})
export class ViewUserReviewsComponent implements OnInit {
  reviewData: Review[] = []
  userData: FbUser | undefined
  durationInSeconds = 3
  
  constructor(
    private auth: AuthService,
    private courseService: ClassService,
    private afs: AngularFirestore,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.auth.userData.subscribe(data => {
      this.userData = data
      this.getUserReviews()
    })
  }

  getUserReviews(): void {
    this.afs.collection('Reviews', ref => 
      ref.where("userId", '==', this.userData?.uid)
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.log("View User Reviews: getUserReviews - No reviews exist")
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
    }, error => {console.log("View User Reviews: getUserReviews - ", error)})
  }

  openSnackBar(message: string, action: string = "Dismiss") {
    this.clipboard.copy(window.location.host)
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
