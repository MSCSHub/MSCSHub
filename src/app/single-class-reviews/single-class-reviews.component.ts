import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Service
import { ClassService } from "../services/classes/class.service";
import { IReview } from '../review';

@Component({
  selector: 'app-single-class-reviews',
  templateUrl: './single-class-reviews.component.html',
  styleUrls: ['./single-class-reviews.component.scss']
})
export class SingleClassReviewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private classService: ClassService) { }
  public reviewsForClass: IReview[] = [];
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const courseIdFromRoute = String(routeParams.get('courseId'));
    this.classService.getAllReviewsForClass(courseIdFromRoute).subscribe(data => this.reviewsForClass = data);
  }

}
