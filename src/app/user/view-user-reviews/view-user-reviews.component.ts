import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogOnDelete } from 'src/app/shared/dialog/review-delete/dialog-on-delete.component';
import { AuthService } from 'src/app/services/auth/auth.service';
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
    private afs: AngularFirestore,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
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
        console.warn("View User Reviews: getUserReviews - No reviews exist")
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
    }, error => {console.error("View User Reviews: getUserReviews - ", error)})
  }

  openSnackBar(message: string, action: string = "Dismiss") {
    this.clipboard.copy(window.location.host)
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }

  removeReview(reviewId: string | undefined): void {
    if(!reviewId) return
    this.openDialog(reviewId)
  }

  openDialog(reviewId: string) {
    const dialogRef = this.dialog.open(DialogOnDelete)
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.afs.collection("Reviews").doc(reviewId).delete()
        let index =  this.reviewData.findIndex(x => x.reviewId==reviewId)
        this.reviewData.splice(index, 1)
      }
    })
  }

}
