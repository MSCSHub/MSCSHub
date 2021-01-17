import { Component, OnInit } from '@angular/core';
import { ClassService } from "../class.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private classService: ClassService) { }
  allClasses = this.classService.getAllClasses();

  ngOnInit(): void {
  }

}
