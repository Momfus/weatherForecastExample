import { TestBed } from '@angular/core/testing';

import { ProvincesArgentinaService } from './provinces-argentina.service';

describe('ProvincesArgentinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvincesArgentinaService = TestBed.get(ProvincesArgentinaService);
    expect(service).toBeTruthy();
  });
});
