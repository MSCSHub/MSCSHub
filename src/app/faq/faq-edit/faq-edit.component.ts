import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FaqService } from 'src/app/services/faq/faq-service.service';
import { FaqEntry } from 'src/app/shared/faq/faq-entry';
import { DialogFaqSubmission } from 'src/app/shared/dialog/faq-submission/dialog-faq-submission.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.scss'],
  providers: [TitleCasePipe],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatOptionModule, MatAutocompleteModule, MatCardModule, ReactiveFormsModule]
})
export class FaqEditComponent implements OnInit {
  faqForm!: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string = 'faq'
  error: string = ''
  faqData: FaqEntry | undefined
  faqId: string = ''
  userFullName: string = ''
  categories: string[] = ['Categories']

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private faqService: FaqService,
    private afs: AngularFirestore,
    private auth: AuthService,
    private tc: TitleCasePipe,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.faqId = this.route.snapshot.paramMap.get('entryId') || ''
    this.initializeFaqForm()
    this.getFaqEntry(this.faqId)
    this.getFaqCategories()
  }

  get f() {
    return this.faqForm?.controls
  }

  onSubmit() {
    this.submitted = true
    this.f.title.setValue(this.tc.transform(this.f.title.value))
    if(this.faqForm?.invalid){
      return
    }
    this.loading = true
    if(this.faqId) {
      this.updateFaqEntry(this.faqId, true)
    } else {
      this.createFaqEntry('Faq', true)
    }
  }

  initializeFaqForm() {
    this.faqForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      body: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      lastModifiedAt: [new Date(), Validators.required],
      lastModifiedBy: ['', Validators.required],
      version: [1, Validators.required],
    })
    this.auth.userData.subscribe(data => this.f.lastModifiedBy.setValue(data?.displayName))
    this.faqForm.controls['lastModifiedAt'].setValue(new Date())
  }
  
  getFaqCategories() {
    this.faqService.categories.subscribe(data => this.categories = data)
  }

  getFaqEntry(entryId: string) {
    this.faqService.faqData.subscribe(data => {
      this.faqData = data.filter(x => x.entryId === entryId)[0] ?? undefined
      if(this.faqData){
        this.f.title.setValue(this.faqData.title)
        this.f.body.setValue(this.faqData.body)
        this.f.category.setValue(this.faqData.category)
        this.f.version.setValue(this.faqData.version + 1)
      }
    })
  }

  createFaqEntry(collection: string, keepLoading: boolean) {
    this.afs.collection("Faq")
    .add(this.faqForm.value)
    .then(result => {
      this.loading = keepLoading
      this.faqForm.addControl('faqId', new FormControl(result.id))
    }, error => {
        console.error("Create FAQ Entry: Submission failed - ", error)
        this.loading = false
        this.error = error.message
      })
    .then(result =>
      this.afs.collection("FaqHistory")
      .add(this.faqForm.value)
      .then(result => {
        this.loading = keepLoading
        this.openSubmittedDialog()
      }, error => {
          console.error("Create FAQ Backup: Submission failed - ", error)
          this.loading = false
          this.error = error.message
        }))
  }

  updateFaqEntry(faqId: string, keepLoading: boolean) {
    this.afs.collection('Faq')
      .doc(faqId)
      .update(this.faqForm.value)
      .then(result => {
        this.loading = keepLoading
        this.faqForm.addControl('faqId', new FormControl(this.faqId))
      }, error => {
        console.error("Update FAQ Entry: Submission failed - ", error)
        this.loading = false
        this.error = error.message
      })
      .then(result =>
        this.afs.collection("FaqHistory")
        .add(this.faqForm.value)
        .then(result => {
          this.loading = keepLoading
          this.openSubmittedDialog()
        }, error => {
            console.error("Create FAQ Backup: Submission failed - ", error)
            this.loading = false
            this.error = error.message
          }))
  }

  openSubmittedDialog() {
    const dialogRef = this.dialog.open(DialogFaqSubmission)
    dialogRef.afterClosed().subscribe(_ => {
      this.router.navigate([this.returnUrl])
    })
  }
}
