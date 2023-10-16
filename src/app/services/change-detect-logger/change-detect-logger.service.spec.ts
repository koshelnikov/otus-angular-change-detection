import { TestBed } from '@angular/core/testing';

import { ChangeDetectLoggerService } from './change-detect-logger.service';

describe('ChangeDetectLoggerService', () => {
  let service: ChangeDetectLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDetectLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
