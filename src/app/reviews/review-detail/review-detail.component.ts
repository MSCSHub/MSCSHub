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
  @Input() reviewData: Review[] = []
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

  openSnackBar(message: string, reviewId?: string, action: string = "Dismiss") {
    this.clipboard.copy(`${window.location.host}/review/${reviewId}`)
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
