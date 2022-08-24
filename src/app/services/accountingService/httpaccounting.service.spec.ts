import { TestBed } from '@angular/core/testing';

import { HttpAccountingService } from './httpaccounting.service';

describe('HttpAccountingService', () => {
  let service: HttpAccountingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAccountingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
