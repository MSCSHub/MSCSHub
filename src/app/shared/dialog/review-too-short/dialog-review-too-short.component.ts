import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'dialog-review-too-short-dialog',
  templateUrl: 'dialog-review-too-short-dialog.html',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogReviewTooShort {
  content = `
    Hi, thanks for taking the time to write a review, though are you sure you wrote enough?
    Most students typically write over 200 words, and it looks like you wrote less than 100.

    Would you please consider going back and adding some more detail? Your classmates would appreciate it!
  `
}