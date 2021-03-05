import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaPartyComponent } from './panda-party.component';

describe('PandaPartyComponent', () => {
  let component: PandaPartyComponent;
  let fixture: ComponentFixture<PandaPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandaPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
