import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridCardComponent } from './course-grid-card.component';

describe('CourseGridCardComponent', () => {
  let component: CourseGridCardComponent;
  let fixture: ComponentFixture<CourseGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGridCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
