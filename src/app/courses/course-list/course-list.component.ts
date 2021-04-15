import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from '../../shared/class/class'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements AfterViewInit {
  @Input() scale: number = 7
  classes: ClassData[] = []
  dataSource = new MatTableDataSource<ClassData>()
  displayedColumns: string[] = [
    'CourseNumber',
    'ClassName',
    'RatingCount',
    'RatingAvg',
    'DifficultyAvg',
    'WorkloadAvg',
    'BookUsefulnessAvg',
    'Semester',
  ]
  objectKeys = Object.keys
  
  @ViewChild(MatSort) sort!: MatSort
   
  constructor(
    private courses: ClassService
  ) { }

  ngAfterViewInit(): void {
    this.courses.classes.subscribe(data => {
      this.classes = data
      this.dataSource = new MatTableDataSource(this.classes)
      this.dataSource.sort = this.sort
    })
  }

  trackById(index: number, item: ClassData) {
    return item.ClassName
  }
}
