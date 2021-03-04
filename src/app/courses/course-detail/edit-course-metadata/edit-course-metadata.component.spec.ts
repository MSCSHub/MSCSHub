import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseMetadataComponent } from './edit-course-metadata.component';

describe('EditCourseMetadataComponent', () => {
  let component: EditCourseMetadataComponent;
  let fixture: ComponentFixture<EditCourseMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
