import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'dialog-faq-sumission-dialog',
  templateUrl: 'dialog-faq-submission-dialog.html',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogFaqSubmission {}