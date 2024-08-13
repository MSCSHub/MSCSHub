import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
    selector: 'dialog-not-verified-dialog',
    templateUrl: 'dialog-not-verified-dialog.html',
    standalone: true,
    imports: [CommonModule, MatDialogModule]
})
export class DialogNotVerified { }