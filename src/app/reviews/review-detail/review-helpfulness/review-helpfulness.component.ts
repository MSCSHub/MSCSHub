import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { reviewFeedbackType } from 'src/app/shared/review/review';

@Component({
  selector: 'app-review-helpfulness',
  templateUrl: './review-helpfulness.component.html',
  styleUrls: ['./review-helpfulness.component.scss']
})
export class ReviewHelpfulnessComponent {
  @Input() isLoggedIn: boolean = false
  @Input() reviewId: string | undefined = ""
  @Input() value: any
  @Input() positive: number | undefined = 0
  @Input() negative: number | undefined = 0

  constructor(
    private auth: AuthService,
  ) { }

  sendReviewFeedback(event: any): void {
    if(this.value[0] === "yes" && this.positive != undefined) this.positive -= 1
    else if(this.value[0] === "no" && this.negative != undefined) this.negative -= 1
    let toggle = event.source;
    if (toggle) {
        let group = toggle.buttonToggleGroup;
        if (event.value.some((item: any) => item == toggle.value)) {
          group.value = [toggle.value];
          if(toggle.value === "yes") this.positive != undefined ? this.positive += 1 : this.positive = 1
          else if(toggle.value === "no") this.negative != undefined ? this.negative += 1 : this.negative = 1
        }
        if(this.reviewId){this.auth.reviewFeedback(this.reviewId, group.value[0])}
    } else if(this.reviewId) this.auth.reviewFeedback(this.reviewId, reviewFeedbackType.undoFeedback)
  }
}
