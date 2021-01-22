import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from '../../shared/class/class'

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {
  classes: ClassData[] = []
     
  constructor(
    private courses: ClassService,
  ) {
    this.courses.classes.subscribe(data => {
      this.classes = data
    })
  }

  ngOnInit(): void { }

}
