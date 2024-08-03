import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FaqService } from 'src/app/services/faq/faq-service.service';
import { DialogOnDelete } from 'src/app/shared/dialog/review-delete/dialog-on-delete.component';

@Component({
  selector: 'faq-entry',
  templateUrl: './faq-entry.component.html',
  styleUrls: ['./faq-entry.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule, RouterModule, MatExpansionModule, MatFormFieldModule]
})
export class FaqEntryComponent implements OnInit {
  @Input() title: string = "Placeholder Title"
  @Input() subtitle: string = ""
  @Input() body: string = "Placeholder text."
  @Input() isUserLoggedIn: boolean = false
  @Input() id: string = ""
  isExpanded: boolean = false

  constructor(
    private route: ActivatedRoute,
    private faqService: FaqService,
    private auth: AuthService,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(!this.id){
      this.isExpanded = true
      this.id = this.route.snapshot.paramMap.get("entryId") || ""
      this.loadFaqEntry(this.id)
      this.auth.isLoggedIn.subscribe(result => this.isUserLoggedIn = result)
    }
  }

  loadFaqEntry(entryId: string) {
    if(!entryId) return
    this.faqService.faqData.subscribe(data => {
      console.log(`unfiltered = ${JSON.stringify(data)}`)
      let faqData = data.filter(x => x.entryId === entryId)[0] ?? undefined
      console.log(`LoadFaqEntry - entryId=${entryId}, this.id=${this.id}, filtered faqData = ${JSON.stringify(faqData)}`)
      if(faqData){
        this.title = faqData.title
        this.body = faqData.body
      }
    })
  }

  removeFaqEntry(entryId: string | undefined): void {
    if(!entryId) return
    console.log(`removeFaqEntry: input entryId = ${entryId}, stored id = ${this.id}`)
    this.openDialog(entryId)
  }

  openDialog(entryId: string) {
    const dialogRef = this.dialog.open(DialogOnDelete)
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.afs.collection("Faq").doc(entryId).delete()
        this.router.navigate(["/faq"])
      }
    })
  }
}
