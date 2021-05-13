import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Review } from 'src/app/shared/review/review';
import { FbUser } from 'src/app/shared/user/user';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatDialog } from '@angular/material/dialog';
import { DialogOnDelete } from 'src/app/shared/dialog/review-delete/dialog-on-delete.component';

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
  @Input() pageLength: number = 5
  @Input() reviewData: Review[] = []
  @Input() dataLength: number = 0
  @Input() showEmptyMsg: boolean = true
  isLoggedIn: boolean = false
  userData: FbUser | undefined
  durationInSeconds: number = 3
  pageSizeOptions: number[] = [5, 10, 25, 100]

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe(status => {this.isLoggedIn = status})
    this.auth.userData.subscribe(data => {
      this.userData = data
    })
    this.reviewId = this.route.snapshot.paramMap.get('id') || this.reviewId
    if(this.reviewId != ""){this.getSingleReview(this.reviewId)}
  }

  getSingleReview(reviewId: string) {
    this.afs.collection("Reviews").doc(reviewId).get().subscribe(doc => {
      const review = doc.data() as Review
      review.reviewId = doc.id
      this.reviewData.push(review)
    })
  }

  openSnackBar(message: string, reviewId?: string, action: string = "Dismiss") {
    this.clipboard.copy(`${window.location.host}/review/${reviewId}`)
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

  getFeedbackValue(reviewId: string): string[] {
    if(!this.userData?.reviewFeedback) return [""]
    if(reviewId in this.userData?.reviewFeedback!) {
      let feedback = this.userData?.reviewFeedback![reviewId]
      if(feedback) return ["yes"]
      else return ["no"]
    }
    return [""]
  }
}
