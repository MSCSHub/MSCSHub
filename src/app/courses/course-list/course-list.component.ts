import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from '../../shared/class/class'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatTooltipModule, MatTableModule]
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
