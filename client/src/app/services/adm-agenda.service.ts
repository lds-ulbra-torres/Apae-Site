import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AdmAgendaService {

  //admAgendaURL = 'http://api-test-apaetorres-org-br.umbler.net/schedule';
  admAgendaURL = 'http://api.apaetorres.org.br/schedule';

  constructor(private http: HttpClient) { }

  getSchedule(){
    return this.http.get<any>(`${this.admAgendaURL}`);
  }

  agendar(data: any){
    const schedule = this.convertItem(data);
    // console.warn('agendar', schedule);
    return this.http.post(this.admAgendaURL, schedule);
  }

  excluir(id: number){
    return this.http.delete(`${this.admAgendaURL}/${id}`);
  }

  editar(data) {
    const schedule = this.convertItem(data);
    return this.http.put(`${this.admAgendaURL}/${schedule.id}`, schedule);
  }

  convertItem(schedule) {
    const copy = Object.assign({}, schedule);
    copy.date = this.convertDateToServer(schedule.date);
    copy.hour = this.convertHourToServer(schedule.hour);
    return copy;
  }

  convertDateToServer(date) {
    if (date) {
      const splittedDate = date.split('-');
      return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    }
    return null;
  }

  convertHourToServer(hour) {
    if (hour.split(':').length && hour.split(':').length == 2) {
      return `${hour}:01`;
    }
    return hour;
  }
}
