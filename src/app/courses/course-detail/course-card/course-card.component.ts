import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() title: string = ""
  @Input() subtitle: string = ""
  @Input() value: number = 0
  @Input() data: any
}
