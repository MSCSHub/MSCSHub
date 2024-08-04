import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
    selector: 'dialog-not-logged-in-dialog',
    templateUrl: 'dialog-not-logged-in-dialog.html',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DialogNotLoggedIn { }