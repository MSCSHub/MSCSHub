import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-edit-course-metadata',
  templateUrl: './edit-course-metadata.component.html',
  styleUrls: ['./edit-course-metadata.component.scss'],
  providers: [TitleCasePipe],
})
export class EditCourseMetadataComponent implements OnInit {
  courseName: string = ""
  fields: string[] = ["exams", "homework", "projects", "proofs", "peer reviewed", "textbook"]
  languages: string[] = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"]
  categories: string[] = ["Applications", "Systems", "Theory", "Elective"]
  courseMetadataForm!: FormGroup
  courseData: ClassData | undefined

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private courseService: ClassService,
    private afs: AngularFirestore,
    private router: Router,
    private tc: TitleCasePipe,
  ) { }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('courseId') || ""
    this.courseMetadataForm = this.formBuilder.group({
      exams: ['', Validators.required],
      homework: ['', Validators.required],
      professor: ['', Validators.required],
      projects: ['', Validators.required],
      proofs: ['', Validators.required],
      "peer reviewed": ['', Validators.required],
      textbook: ['', Validators.required],
      textbookName: [''],
      category: ['', Validators.required],
      languages: ['']
    })
    this.courseService.classes.subscribe(data => {
      this.courseData = data.find(x => x.ClassName == this.courseName)
      this.f.exams.setValue(this.courseData?.meta.exams.toString())
      this.f.homework.setValue(this.courseData?.meta.homework.toString())
      this.f.projects.setValue(this.courseData?.meta.projects.toString())
      this.f.proofs.setValue(this.courseData?.meta.proofs.toString())
      this.f.category.setValue(this.courseData?.category)
      this.f.languages.setValue(this.courseData?.languages)
      this.f["peer reviewed"].setValue(this.courseData?.meta['peer reviewed']?.toString())
      this.f.textbook.setValue(this.courseData?.Textbook.toString())
      this.f.textbookName.setValue(this.courseData?.TextbookName)
      this.f.professor.setValue(this.courseData?.Teacher)
      this.courseData?.Textbook ? this.f.textbookName.enable() : this.f.textbookName.disable()
    })
    this.f.textbook.valueChanges.subscribe(val => {val=="true" ? this.f.textbookName.enable() : this.f.textbookName.disable()})
  }

  get f() {
    return this.courseMetadataForm?.controls
  }

  onSubmit(): void {
    this.afs
      .collection("Class")
      .doc(this.courseData?.courseId)
      .update({
        category: this.f.category.value,
        meta: {
          exams: this.f.exams.value === "true" ? true : false,
          homework: this.f.homework.value === "true" ? true : false,
          projects: this.f.projects.value === "true" ? true : false,
          proofs: this.f.proofs.value === "true" ? true : false,
          "peer reviewed": this.f["peer reviewed"].value === "true" ? true : false,
        },
        languages: this.f.languages.value,
        Teacher: this.tc.transform(this.f.professor.value),
        Textbook: this.f.textbook.value === "true" ? true : false,
        TextbookName: this.tc.transform(this.f.textbookName.value),
      }).then(() => {
        this.router.navigate([`courses/${this.courseName}`])
      })
  }
}
