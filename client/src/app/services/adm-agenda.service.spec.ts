import { TestBed, inject } from '@angular/core/testing';

import { AdmAgendaService } from './adm-agenda.service';

describe('AdmAgendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmAgendaService]
    });
  });

  it('should be created', inject([AdmAgendaService], (service: AdmAgendaService) => {
    expect(service).toBeTruthy();
  }));
});
