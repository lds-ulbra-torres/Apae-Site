import { TestBed, inject } from '@angular/core/testing';

import { ApaeTorresService } from './apae-torres.service';

describe('ApaeTorresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApaeTorresService]
    });
  });

  it('should be created', inject([ApaeTorresService], (service: ApaeTorresService) => {
    expect(service).toBeTruthy();
  }));
});
