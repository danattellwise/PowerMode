import { TestBed } from '@angular/core/testing';

import { PowerModeService } from './power-mode.service';

describe('PowerModeService', () => {
  let service: PowerModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
