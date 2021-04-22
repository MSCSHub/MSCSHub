import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';
import { Review } from '../../shared/review/review';
import firebase from 'firebase/app'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
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
  orderByOptions = [
    {displayText: "Most Helpful", field: "wilsonScore", order: "desc"},
    {displayText: "Least Helpful", field: "wilsonScore", order: "asc"},
    {displayText: "Newest", field: "timestamp", order: "desc"},
    {displayText: "Oldest", field: "timestamp", order: "asc"},
  ]
  reviewDataStack: any[] = []
  reviewData: Review[] = []
  pageNumber: number = 0
  disableNext: boolean = false
  disablePrev: boolean = false
  pageLength: number = 5
  maxLength: number = 99999
  isLoggedIn: boolean = false
  selectedSort: {displayText: string, field: string, order: string} = this.orderByOptions[0]
  objectKeys = Object.keys

  @ViewChild('imageContainer')  imageContainer!: ElementRef;
  @ViewChild('gradientContainer')  gradientContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private auth: AuthService,
    private renderer: Renderer2,
    private classService: ClassService,
  ) {}
  ngAfterViewInit(): void {
    this.updateGraphicStyles()
  }
  
  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('courseId') || ""
    this.auth.isLoggedIn.subscribe(state => {this.isLoggedIn = state})
    this.getClassData()
    this.getFirstPage()
    document.getElementsByClassName("mat-drawer-content")[0].scroll(0,0) // Ensures that we start from the top
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
    this.pageNumber = 0
    this.disablePrev = true
    this.disableNext = false
    this.reviewDataStack = []
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy(this.selectedSort.field, this.selectedSort.order as firebase.firestore.OrderByDirection)
    ).get().subscribe(response => {
      this.reviewData = []
      if (!response.docs.length){
        console.warn("Course Detail: No reviews exist")
        this.disableNext = true
        this.disablePrev = true
        return
      }
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
    }, error => {console.error("Course Detail: getFirstPage - ", error)})
  }

  nextPage() {
    this.disablePrev = false
    const lastReview = this.reviewDataStack[this.reviewDataStack.length-1].docs[this.pageLength-1]
    this.afs.collection('Reviews', ref => ref
      .where("course", '==', this.courseName)
      .limit(this.pageLength)
      .orderBy(this.selectedSort.field, this.selectedSort.order as firebase.firestore.OrderByDirection)
      .startAfter(lastReview)
    ).get().subscribe(response => {
      if (!response.docs.length){
        console.warn("Course Detail: No reviews exist")
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
      if (response.docs.length < 5 || this.reviewData.length >= this.course!.RatingCount) {
        this.disableNext = true
        this.maxLength = this.reviewData.length
      }
    }, error => {console.error("Course Detail: nextPage -", error)})
  }

  getPrevPage(): void {
    this.pageNumber--
    this.disableNext = false
    if (this.pageNumber === 0) {
      this.disablePrev = true
    }
    this.goToLocation("review-spacer")
  }

  getNextPage(): void {
    this.disablePrev = false
    if((this.pageNumber+1) * this.pageLength >= this.reviewData.length) {
      this.nextPage()
    } else { this.pageNumber++ }
    if ((this.pageNumber+1)*this.pageLength >= this.maxLength) {
      this.disableNext = true
    }
    this.goToLocation("review-spacer")
  }

  goToLocation(location: string): void {
    window.location.hash = ""
    window.location.hash = location
    let x = document.getElementsByClassName("mat-drawer-content")[0]
    x.scroll(0, x.scrollTop - 40)
  }

  updateCards(course: ClassData): void {
    this.cards[0].value = course.RatingCount
    this.cards[1].value = course.RatingAvg
    this.cards[2].value = course.DifficultyAvg
    this.cards[3].value = course.WorkloadAvg
    this.cards[4].value = course.Textbook ? course.BookUsefulnessAvg : 0
    this.cards[5].value = course.LectureQualityAvg
    this.cards[6].value = course.ProfessorQualityAvg
    this.cards[7].value = course.PiazzaCommunityAvg
  }

  semesterMatch(season: string, semesters: string[]): string {
    return semesters.filter(function(k){return ~k.indexOf(season)}).toString().split(',').join('\n')
  }

  newSort(event: any): void {
    this.getFirstPage()
  }
}
