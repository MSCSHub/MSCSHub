import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [TitleCasePipe],
})
export class CreateCourseComponent implements OnInit {
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
  ) {
    if(this.courseService.website == "dataScience") {
      this.categories = ["foundations", "elective"]
      this.languages = ['Python', 'R', 'No Code']
    }
  }
  classFields = [
    {field: 'ClassName', display: 'Class Name'},
    {field: 'CourseNumber', display: 'Course Number'},
    {field: 'GraphicThumbnail', display: 'Graphic Thumbnail (from main grid)'},
    {field: 'GraphicColor', display: 'Graphic Color (from course page - lienar-gradient...)'},
    {field: 'GraphicUrl', display: 'Graphic URL (from course page - url(https://...) )'},
    {field: 'Teacher', display: 'Teacher (separated by &)'},
    {field: 'category', display: 'Category (if dataScience only this does not get used)'},
    {field: 'csIsComputerScience', display: 'is Computer Science? boolean true or false'},
    {field: 'csCategory', display: 'CS category'},
    {field: 'dsIsDataScience', display: 'is Data Science? boolean true or false'},
    {field: 'dsCategory', display: 'DS category'},
  ]

  ngOnInit(): void {
    this.courseMetadataForm = this.formBuilder.group({
      BookUsefulnessAvg: [0, Validators.required],
      BookUsefulnessCount: [0, Validators.required],
      ClassName: ['', Validators.required],               // NEED
      CourseNumber: ['', Validators.required],            // NEED
      DifficultyAvg: [0, Validators.required],
      DifficultyCount: [0, Validators.required],
      GraphicThumbnail: ['', Validators.required],        // NEED
      GraphicColor: ['', Validators.required],            // NEED
      GraphicUrl: ['url(https://www.cs.utexas.edu', Validators.required],              // NEED
      LectureQualityAvg: [0, Validators.required],
      LectureQualityCount: [0, Validators.required],
      PiazzaCommunityAvg: [0, Validators.required],
      PiazzaCommunityCount: [0, Validators.required],
      ProfessorQualityAvg: [0, Validators.required],
      ProfessorQualityCount: [0, Validators.required],
      RatingAvg: [0, Validators.required],
      RatingCount: [0, Validators.required],
      Teacher: ['', Validators.required],                 // NEED
      Textbook: [false, Validators.required],             
      TextbookName: ['', Validators.required],
      WorkloadAvg: [0, Validators.required],
      WorkloadCount: [0, Validators.required],
      category: ['', Validators.required],                // NEED
      csIsComputerScience: ['', Validators.required],     // NEED
      csCategory: [''],              // NEED
      dsIsDataScience: ['', Validators.required],         // NEED
      dsCategory: [''],              // NEED
      languages: ['', Validators.required],               
      // lastUpdated: ['', Validators.required],
      metaExams: ['', Validators.required],
      metaHomework: ['', Validators.required],
      metaPeerReviewed: ['', Validators.required],
      metaProjects: ['', Validators.required],
      metaProofs: ['', Validators.required],
      seasonSpring: [false, Validators.required],
      seasonSummer: [false, Validators.required],
      seasonFall: [false, Validators.required],
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
    this.afs.collection('Class')
        // .add(this.courseMetadataForm.value)
        .add({
          BookUsefulnessAvg: this.f.BookUsefulnessAvg.value,
          BookUsefulnessCount: this.f.BookUsefulnessCount.value,
          ClassName: this.f.ClassName.value,
          CourseNumber: this.f.CourseNumber.value,
          DifficultyAvg: this.f.DifficultyAvg.value,
          DifficultyCount: this.f.DifficultyCount.value,
          GraphicThumbnail: this.f.GraphicThumbnail.value,
          GraphicColor: this.f.GraphicColor.value,
          GraphicUrl: this.f.GraphicUrl.value,
          LectureQualityAvg: this.f.LectureQualityAvg.value,
          LectureQualityCount: this.f.LectureQualityCount.value,
          PiazzaCommunityAvg: this.f.PiazzaCommunityAvg.value,
          PiazzaCommunityCount: this.f.PiazzaCommunityCount.value,
          ProfessorQualityAvg: this.f.ProfessorQualityAvg.value,
          ProfessorQualityCount: this.f.ProfessorQualityCount.value,
          RatingAvg: this.f.RatingAvg.value,
          RatingCount: this.f.RatingCount.value,
          Teacher: this.f.Teacher.value,
          Textbook: this.f.Textbook.value === "true" ? true : false,
          TextbookName: this.f.TextbookName.value,
          WorkloadAvg: this.f.WorkloadAvg.value,
          WorkloadCount: this.f.WorkloadCount.value,
          category: this.f.category.value,
          computerScience: {
            isComputerScience: this.f.csIsComputerScience.value === "true" ? true : false,
            category: this.f.csCategory.value,
          },
          dataScience: {
            isDataScience: this.f.dsIsDataScience.value === "true" ? true : false,
            category: this.f.dsCategory.value,
          },
          languages: [],
          meta: {
            exams: this.f.metaExams.value,
            homework: this.f.metaHomework.value, 
            "peer reviewed": this.f.metaPeerReviewed.value,
            projects: this.f.metaProjects.value,
            proofs: this.f.metaProofs.value,
          },
          season: {
            spring: this.f.seasonSpring.value === "true" ? true : false,
            summer: this.f.seasonSummer.value === "true" ? true : false,
            fall: this.f.seasonFall.value === "true" ? true : false,
          },
          semesters: {},
        })
        .then(result => {
          window.alert("Added! Reload the window to add another one.")
          location.reload()
        }, error => {
          console.error("Create Review: Submission failed -", error)
          window.alert("Error! See the console for more.")
        })
  }
}
