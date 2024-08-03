import { Component, OnInit } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list-view',
  templateUrl: './course-list-view.component.html',
  styleUrls: ['./course-list-view.component.scss'],
  standalone: true,
  imports: [CourseListComponent, MatRadioModule, CommonModule, FormsModule]
})
export class CourseListViewComponent implements OnInit {
  scale: number = 7

  constructor() { }

  ngOnInit(): void {
  }

}
