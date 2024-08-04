import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {  MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReviewDetailComponent } from 'src/app/reviews/review-detail/review-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-course-metadata',
  templateUrl: './edit-course-metadata.component.html',
  styleUrls: ['./edit-course-metadata.component.scss'],
  standalone: true,
  providers: [TitleCasePipe],
  imports: [CommonModule, MatOptionModule, MatSelectModule, MatDividerModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatInputModule, FlexLayoutModule, MatButtonModule]
})
export class EditCourseMetadataComponent implements OnInit {
  courseName: string = ""
  fields: string[] = ["exams", "homework", "projects", "proofs", "peer reviewed", "textbook", "prerequisites"]
  languages: string[] = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"]
  categories: string[] = ["Applications", "Systems", "Theory", "Elective", "Thesis"]
  courseMetadataForm!: FormGroup
  courseData: ClassData | undefined

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private courseService: ClassService,
    private afs: AngularFirestore,
    private router: Router,
    private tc: TitleCasePipe,
  ) {
    if(this.courseService.website === "dataScience") {
      this.categories = ["foundations", "elective"]
      this.languages = ['Python', 'R', 'No Code']
    } else if (this.courseService.website === "ai") {
      this.categories = ["foundations", "elective"]
      this.languages = ['Python', 'R', 'No Code']
    }
  }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('courseId') || ""
    this.courseMetadataForm = this.formBuilder.group({
      category: ['', Validators.required],
      exams: ['', Validators.required],
      examsBool: ['', Validators.required],
      homework: ['', Validators.required],
      homeworkBool: ['', Validators.required],
      languages: [''],
      prerequisites: [''],
      prerequisitesBool: ['', Validators.required],
      professor: ['', Validators.required],
      projects: ['', Validators.required],
      projectsBool: ['', Validators.required],
      proofs: ['', Validators.required],
      proofsBool: ['', Validators.required],
      "peer reviewed": ['', Validators.required],
      "peer reviewedBool": ['', Validators.required],
      "slack channel": ['', Validators.required],
      "slack channelBool": ['', Validators.required],
      "slack channelLink": ['', Validators.required],
      textbook: ['', Validators.required],
      textbookBool: ['', Validators.required],
      textbookName: [''],
    })
    this.courseService.classes.subscribe(data => {
      this.courseData = data.find(x => x.ClassName == this.courseName)
      this.setFieldData(this.f.exams, this.f.examsBool, this.courseData?.meta.exams)
      this.setFieldData(this.f.homework, this.f.homeworkBool, this.courseData?.meta.homework)
      this.setFieldData(this.f.prerequisites, this.f.prerequisitesBool, this.courseData?.Prerequisites)
      this.setFieldData(this.f.projects, this.f.projectsBool, this.courseData?.meta.projects)
      this.setFieldData(this.f.proofs, this.f.proofsBool, this.courseData?.meta.proofs)
      this.setFieldData(this.f["peer reviewed"], this.f["peer reviewedBool"], this.courseData?.meta['peer reviewed'].toString())
      this.setFieldData(this.f.textbook, this.f.textbookBool, this.courseData?.TextbookName)
      this.f.category.setValue(this.courseData?.category)
      this.f.languages.setValue(this.courseData?.languages)
      this.f.professor.setValue(this.courseData?.Teacher)
      this.setFieldData(this.f["slack channel"], this.f["slack channelBool"], "#" + this.courseData?.SlackChannel)
      this.setFieldData(this.f["slack channelLink"], this.f["slack channelBool"], this.courseData?.SlackChannelLink)
    })
  }

  get f() {
    return this.courseMetadataForm?.controls
  }

  setFieldData(field: AbstractControl, fieldBool: AbstractControl, fieldValue: any): void {
    fieldValue ? field.setValue(fieldValue) : ""
    fieldValue ? fieldBool.setValue("true") : fieldBool.setValue("false")
    fieldValue ? field.enable() : field.disable()
    fieldBool.valueChanges.subscribe(val => {val=="true" ? field.enable() : field.disable()})
  }

  onSubmit(): void {
    this.afs
      .collection("Class")
      .doc(this.courseData?.courseId)
      .update({
        category: this.f.category.value,
        meta: {
          exams: this.f.examsBool.value === "true" ? this.f.exams.value : "",
          homework: this.f.homeworkBool.value === "true" ? this.f.homework.value : "",
          projects: this.f.projectsBool.value === "true" ? this.f.projects.value : "",
          proofs: this.f.proofsBool.value === "true" ? this.f.proofs.value : "",
          "peer reviewed": this.f["peer reviewedBool"].value === "true" ? this.f["peer reviewed"].value : "",
        },
        computerScience: {
          category: this.courseService.website === this.courseService.MSCS ? this.f.category.value : this.courseData?.computerScience?.category,
          isComputerScience: this.courseData?.computerScience.isComputerScience
        },
        dataScience: {
          category: this.courseService.website === this.courseService.MSDS ? this.f.category.value : this.courseData?.dataScience?.category,
          isDataScience: this.courseData?.dataScience.isDataScience
        },
        ai: {
          category: this.courseService.website === this.courseService.MSAI ? this.f.category.value : this.courseData?.artificialIntelligence?.category,
          isArtificialIntelligence: this.courseData?.artificialIntelligence.isArtificialIntelligence
        },
        languages: this.f.languages.value,
        Prerequisites: this.f.prerequisitesBool.value === "true" ? this.f.prerequisites.value : "",
        SlackChannel: this.f["slack channelBool"].value === "true" ? this.f["slack channel"].value.replace('#', '') : "",
        SlackChannelLink: this.f["slack channelBool"].value === "true" ? this.f["slack channelLink"].value : "",
        Teacher: this.tc.transform(this.f.professor.value),
        Textbook: this.f.textbookBool.value === "true" ? true : false,
        TextbookName: this.f.textbookBool.value === "true" ? this.tc.transform(this.f.textbook.value) : null,
      }).then(() => {
        this.courseService.updateCourseData()
        this.router.navigate([`courses/${this.courseName}`])
      })
  }
}
