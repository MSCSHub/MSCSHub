import { Component, OnInit } from '@angular/core';
import { IClass } from '../class';
import { ClassService } from "../class.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private classService: ClassService) { }
  public allClasses: IClass[] = [];

  ngOnInit(): void {
    this.classService.getAllClasses().subscribe(data => this.allClasses = data);
  }

}
