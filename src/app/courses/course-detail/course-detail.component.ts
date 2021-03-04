import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { Review } from '../../shared/review/review'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, AfterViewInit {
  courseName: string = ""
  courseNumber: string = ""
  course?: ClassData
  cards = [
    {title: 'Reviews', subtitle: 'Total Count', value: 0}, 
    {title: 'Rating', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Difficulty', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Workload', subtitle: 'Hours Per Week', value: 0},
    {title: 'Textbook', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Lectures', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Professor', subtitle: 'On a Scale of 1-7', value: 0},
    {title: 'Piazza Support', subtitle: 'On a Scale of 1-7', value: 0},
  ]
  reviewDataStack: any[] = []
  reviewData: Review[] = []
  pageNumber: number = 0
  disableNext: boolean = false
  disablePrev: boolean = false
  pageLength: number = 5
  maxLength: number = 99999
  isLoggedIn: boolean = false

  @ViewChild('imageContainer')  imageContainer!: ElementRef;
  @ViewChild('gradientContainer')  gradientContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private auth: AuthService,
    private renderer: Renderer2,
    private classService: ClassService
  ) {}
  ngAfterViewInit(): void {
    this.updateGraphicStyles()
  }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('id') || ""
    this.auth.isLoggedIn.subscribe(state => {this.isLoggedIn = state})
    this.getClassData()
    this.getFirstPage()
  }

  getClassData(): void {
    this.classService.classes.subscribe(data => {
      this.course = data.find(x => x.ClassName == this.courseName)
      this.courseNumber = this.course!.CourseNumber
      this.updateCards(this.course!)
      this.updateGraphicStyles()
    })
  }

  updateGraphicStyles(): void {
    if(this.gradientContainer?.nativeElement){
      this.renderer.setStyle(this.gradientContainer?.nativeElement,'background',this.course?.GraphicColor)
      this.renderer.setStyle(this.imageContainer?.nativeElement,'background-image',this.course?.GraphicUrl)
    }
  }

  getFirstPage() {
    this.disablePrev = true
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy("timestamp","desc")
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        this.disablePrev = true
        return
      }
      this.reviewData = []
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber = 0
      if (response.docs.length < 5) {
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  nextPage() {
    this.disablePrev = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy("timestamp","desc")
      .startAfter(lastReview)
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.log("No reviews exist")
        //TODO Add something to let the user know that there are no reviews
        this.disableNext = true
        return
      }
      for (let item of response.docs) {
        const review = item.data() as Review
        review.reviewId = item.id
        this.reviewData.push(review)
      }
      this.reviewDataStack.push(response)
      this.pageNumber++
      if (response.docs.length < 5 || this.reviewData.length >= this.course!.RatingCount) { // TODO Add || this.page_number*this.page_length + this.reviewData.length >= course.RatingCount
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.log(error)})
  }

  getPrevPage(): void {
    this.pageNumber--
    this.disableNext = false
    console.log("Previous", this.pageNumber)
    if (this.pageNumber === 0) {
      this.disablePrev = true
    }
  }

  getNextPage(): void {
    this.disablePrev = false
    if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
      this.nextPage()
    } else { this.pageNumber++ }
    console.log(this.pageNumber * this.pageLength)
    console.log(this.maxLength)
    if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
      this.disableNext = true
    }
  }

  updateCards(course: ClassData): void {
    this.cards[0].value = course.RatingCount
    this.cards[1].value = course.RatingAvg
    this.cards[2].value = course.DifficultyAvg
    this.cards[3].value = course.WorkloadAvg
    this.cards[4].value = course.BookUsefulnessAvg
  }
}
