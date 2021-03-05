import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadPandaComponent } from './sad-panda.component';

describe('SadPandaComponent', () => {
  let component: SadPandaComponent;
  let fixture: ComponentFixture<SadPandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadPandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadPandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
