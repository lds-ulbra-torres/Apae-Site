import { TestBed, inject } from '@angular/core/testing';

import { NossosParceirosService } from './nossos-parceiros.service';

describe('NossosParceirosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NossosParceirosService]
    });
  });

  it('should be created', inject([NossosParceirosService], (service: NossosParceirosService) => {
    expect(service).toBeTruthy();
  }));
});
