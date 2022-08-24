import { TestBed } from '@angular/core/testing';

import { HttpBookingService } from './httpbooking.service';

describe('HttpBookingService', () => {
  let service: HttpBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
