import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClassReviewsComponent } from './single-class-reviews.component';

describe('SingleClassReviewsComponent', () => {
  let component: SingleClassReviewsComponent;
  let fixture: ComponentFixture<SingleClassReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClassReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleClassReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
