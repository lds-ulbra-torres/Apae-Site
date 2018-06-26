import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendaService {

  agendaUrl = 'http://api-test-apaetorres-org-br.umbler.net/schedule';

  constructor(private http: HttpClient) {  }

  getSchedule(){
    return this.http.get<any>(`${this.agendaUrl}`);
  }


}
