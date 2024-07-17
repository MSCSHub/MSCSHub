import { Component } from '@angular/core';
import { ClassService } from '../services/classes/class.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  logUrl!: string;

  constructor(public courseService: ClassService) {
    this.setLogUrl();
  }

  private setLogUrl(): void {
    switch (this.courseService.website) { // Fixed typo in property name
      case "computerScience":
        this.logUrl = "assets/images/logos/Colorwheel/TheHubMSCS-128.png";
        break;
      case "dataScience":
        this.logUrl = "assets/images/logos/Colorwheel/TheHubMSDS-128.png";
        break;
      case "ai":
        this.logUrl = "assets/images/logos/Colorwheel/TheHubMSCS-128.png"; // Placeholder, adjust if AI should have a different logo
        break;
      default:
        this.logUrl = "assets/images/logos/Colorwheel/TheHubMSCS-128.png";
    }
  }
}
