import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassData } from '../../shared/class/class'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
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
  
  @ViewChild(MatSort) sort!: MatSort
   
  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.afs.collection<ClassData>('Class')
      .valueChanges()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
      })
  }

  trackById(index: number, item: ClassData) {
    return item.ClassName
  }

}
