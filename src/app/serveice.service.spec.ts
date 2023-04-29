import { TestBed } from '@angular/core/testing';

import { ServeiceService } from './serveice.service';

describe('ServeiceService', () => {
  let service: ServeiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
