import { Component } from '@angular/core';
import { ClassService } from '../services/classes/class.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  scale: number = 7
  logoUrl: string = this.courseService.website === "computerScience" ? "assets/images/logos/Colorwheel/TheHubMSCS-128.png" : "assets/images/logos/Colorwheel/TheHubMSDS-128.png"

  constructor(
    public courseService: ClassService
  ) {}
}
