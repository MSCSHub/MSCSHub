import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { CourseGridComponent } from '../../course-grid/course-grid.component';

@Component({
  selector: 'app-edit-course-metadata',
  templateUrl: './edit-course-metadata.component.html',
  styleUrls: ['./edit-course-metadata.component.scss']
})
export class EditCourseMetadataComponent implements OnInit {
  courseName: string = ""
  fields: string[] = ["exams", "homework", "projects", "proofs"]
  languages: string[] = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"]
  categories: string[] = ["Applications", "Systems", "Theory", "Elective"]
  courseMetadataForm!: FormGroup
  courseData: ClassData | undefined

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private courseService: ClassService,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('id') || ""
    this.courseMetadataForm = this.formBuilder.group({
      exams: ['', Validators.required],
      homework: ['', Validators.required],
      projects: ['', Validators.required],
      proofs: ['', Validators.required],
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
    })
  }

  get f() {
    return this.courseMetadataForm?.controls
  }

  onSubmit(): void {
    console.log("Edit CourseMetadata: Language value after submit", this.f.languages.value)
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
          },
          languages: this.f.languages.value
        }).then(() => {
          console.log("Edit courseMetaData: Successfully updated")
          this.router.navigate([`courses/${this.courseName}`])
        })
  }
}
