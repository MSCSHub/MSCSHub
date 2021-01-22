import { Component, Input, OnInit } from '@angular/core';
import { ClassData } from 'src/app/shared/class/class';

@Component({
  selector: 'app-course-grid-card',
  templateUrl: './course-grid-card.component.html',
  styleUrls: ['./course-grid-card.component.scss']
})
export class CourseGridCardComponent implements OnInit {
  // @Input() CourseName: string = ""
  // @Input() CourseNumber: string = ""
  // @Input() GraphicThumbnail: string = ""
  // @Input() meta: Map<string, boolean> = new Map()
  // @Input() languages: string[] | null = []
  @Input() course!: ClassData

  constructor() { }

  ngOnInit(): void {
  }

}
