import { TestBed } from '@angular/core/testing';

import { HTTPGameService } from './httpgame.service';

describe('HTTPGameService', () => {
  let service: HTTPGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
