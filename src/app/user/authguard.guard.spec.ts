import { TestBed } from '@angular/core/testing';

import { AuthguardGuard } from './authguard.guard';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
