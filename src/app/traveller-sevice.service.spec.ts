import { TestBed } from '@angular/core/testing';

import { TravellerSeviceService } from './traveller-sevice.service';

describe('TravellerSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravellerSeviceService = TestBed.get(TravellerSeviceService);
    expect(service).toBeTruthy();
  });
});
