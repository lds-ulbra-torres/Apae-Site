import { AdmAgendaService } from './../../../services/adm-agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adm-agenda',
  templateUrl: './adm-agenda.component.html',
  styleUrls: ['./adm-agenda.component.css']
})
export class AdmAgendaComponent implements OnInit {

  agenda: any[];
  schedule: Schedule;

  criarAgenda: boolean = false;

  constructor(private admAgendaService: AdmAgendaService) {}

  ngOnInit() {
    this.schedule = {};
    this.getSchedule();
    this.agenda = [];
  }

  getSchedule(){
    this.admAgendaService.getSchedule().subscribe(res => {
      // console.warn('agenda', res);
      this.agenda = res.obj;
    });
  }
  
  agendar(frm: FormGroup){
    // console.warn('frm', frm);
    this.admAgendaService.agendar(this.schedule).subscribe((resposta) => {
      // console.warn('resp', resposta);
      // this.agenda.push(resposta.obj);
      frm.reset();
      this.criarAgenda = false;
      this.getSchedule();
    });
  }

  excluir (id) {
    this.admAgendaService.excluir(id).subscribe((response) => {
      // console.warn('resp', response);
      this.getSchedule();
    });
  }
  
  confirmaExcluir(schedule) {
    const confirmou = window.confirm(`Tem certeza que deseja excluir o evento ${schedule.description}?`);
    if (confirmou) {
      this.excluir(schedule.id);
    } else {}
  }

  toggleNewSchedule(){
    this.criarAgenda = !this.criarAgenda;
  }

  selecionaSchedule(a) {
    this.schedule = Object.assign({}, a);
    const split = a.date.split('/');
    this.schedule.date = `${split[2]}-${split[1]}-${split[0]}`;
    // console.warn('aaa', a);
  }

  editaAgenda() {
    if (this.schedule.id && this.schedule.id != 0) {
      this.admAgendaService.editar(this.schedule).subscribe((response) => {
        // console.warn('respo', response);
        this.schedule = {};
        this.getSchedule();
      })
    }
  }

}
export class Schedule {
  id?: number;
  date?: string;
  hour?: string;

  constructor(id?, date?, hour?) {
    this.id = id || null;
    this.date = date || null;
    this.hour = hour || null;
  }
}
