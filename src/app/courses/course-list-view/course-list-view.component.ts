import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-view',
  templateUrl: './course-list-view.component.html',
  styleUrls: ['./course-list-view.component.scss']
})
export class CourseListViewComponent implements OnInit {
  scale: number = 7

  constructor() { }

  ngOnInit(): void {
  }

}
