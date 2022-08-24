import { TestBed } from '@angular/core/testing';

import { HttpCartService } from './httpcart.service';

describe('HttpCartService', () => {
  let service: HttpCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
