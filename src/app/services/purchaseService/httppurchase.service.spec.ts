import { TestBed } from '@angular/core/testing';

import { HttpPurchaseService } from './http-purchase.service';

describe('HttpPurchaseService', () => {
  let service: HttpPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
