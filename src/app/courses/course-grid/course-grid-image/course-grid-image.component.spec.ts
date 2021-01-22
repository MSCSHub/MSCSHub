import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGridImageComponent } from './course-grid-image.component';

describe('CourseGridImageComponent', () => {
  let component: CourseGridImageComponent;
  let fixture: ComponentFixture<CourseGridImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseGridImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGridImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
