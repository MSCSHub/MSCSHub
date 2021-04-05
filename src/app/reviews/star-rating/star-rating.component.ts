import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  stars: number[] = [1, 2, 3, 4, 5, 6, 7];
  @Input() selectedValue: number = 0;

  constructor() { }
}
