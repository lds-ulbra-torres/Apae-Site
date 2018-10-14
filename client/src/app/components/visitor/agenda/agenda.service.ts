import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendaService {

  //agendaUrl = 'http://api-test-apaetorres-org-br.umbler.net/schedule';
  agendaUrl = 'http://api.apaetorres.org.br/schedule';

  constructor(private http: HttpClient) {  }

  getSchedule(){
    return this.http.get<any>(`${this.agendaUrl}`);
  }

  convertDateFromServer(date) {
    if (date) {
      const splittedDate = date.split('/');
      return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
    }
    return null;
  }

}
