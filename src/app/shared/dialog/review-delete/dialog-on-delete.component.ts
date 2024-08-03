import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'dialog-on-delete-dialog',
  templateUrl: 'dialog-on-delete-dialog.html',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogOnDelete {}