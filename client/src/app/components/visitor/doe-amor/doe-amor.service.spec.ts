import { TestBed, inject } from '@angular/core/testing';

import { DoeAmorService } from './doe-amor.service';

describe('DoeAmorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoeAmorService]
    });
  });

  it('should be created', inject([DoeAmorService], (service: DoeAmorService) => {
    expect(service).toBeTruthy();
  }));
});
