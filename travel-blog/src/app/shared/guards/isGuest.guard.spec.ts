import { TestBed } from '@angular/core/testing';

import { IsGuestGuard } from './isGuest.guard';

describe('IsGuestGuard', () => {
  let guard: IsGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
