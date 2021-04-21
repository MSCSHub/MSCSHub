import { Component } from '@angular/core';
import { ClassService } from '../services/classes/class.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  scale: number = 7

  constructor(
    public courseService: ClassService
  ) {}
}
