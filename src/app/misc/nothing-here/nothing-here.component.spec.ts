import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingHereComponent } from './nothing-here.component';

describe('NothingHereComponent', () => {
  let component: NothingHereComponent;
  let fixture: ComponentFixture<NothingHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NothingHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
