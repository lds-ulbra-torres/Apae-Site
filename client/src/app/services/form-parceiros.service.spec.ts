import { TestBed, inject } from '@angular/core/testing';

import { FormParceirosService } from './form-parceiros.service';

describe('FormParceirosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormParceirosService]
    });
  });

  it('should be created', inject([FormParceirosService], (service: FormParceirosService) => {
    expect(service).toBeTruthy();
  }));
});
