import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewHelpfulnessComponent } from './review-helpfulness.component';

describe('ReviewHelpfulnessComponent', () => {
  let component: ReviewHelpfulnessComponent;
  let fixture: ComponentFixture<ReviewHelpfulnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewHelpfulnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewHelpfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
