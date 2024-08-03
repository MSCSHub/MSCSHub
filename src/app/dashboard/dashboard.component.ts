import { Component } from '@angular/core';
import { ClassService } from '../services/classes/class.service';
import { CourseGridComponent } from '../courses/course-grid/course-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CourseGridComponent, MatButtonModule, FlexLayoutModule]
})
export class DashboardComponent {
  logoUrl: string = this.courseService.website === "computerScience" ? "assets/images/logos/Colorwheel/TheHubMSCS-128.png" : "assets/images/logos/Colorwheel/TheHubMSDS-128.png"

  constructor(
    public courseService: ClassService
  ) {}
}
