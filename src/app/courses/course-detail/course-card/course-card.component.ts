import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, FooterComponent]
})
export class CourseCardComponent {
  @Input() title: string = ""
  @Input() subtitle: string = ""
  @Input() value: number = 0
  @Input() data: any
}
