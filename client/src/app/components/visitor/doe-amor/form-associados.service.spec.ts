import { TestBed, inject } from '@angular/core/testing';

import { FormAssociadosService } from './form-associados.service';

describe('FormAssociadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormAssociadosService]
    });
  });

  it('should be created', inject([FormAssociadosService], (service: FormAssociadosService) => {
    expect(service).toBeTruthy();
  }));
});
