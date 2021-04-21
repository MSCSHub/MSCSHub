import { Component } from '@angular/core';
import { ClassService } from '../services/classes/class.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: any = new Date().getFullYear()

  constructor(
    public courseService: ClassService
  ) { }

}
