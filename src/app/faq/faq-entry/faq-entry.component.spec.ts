import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqEntryComponent } from './faq-entry.component';

describe('FaqEntryComponent', () => {
  let component: FaqEntryComponent;
  let fixture: ComponentFixture<FaqEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [FaqEntryComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
