import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserReviewsComponent } from './view-user-reviews.component';

describe('ViewUserReviewsComponent', () => {
  let component: ViewUserReviewsComponent;
  let fixture: ComponentFixture<ViewUserReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
