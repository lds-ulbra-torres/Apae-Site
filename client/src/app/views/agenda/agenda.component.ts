import { AgendaService } from './../../services/agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: any[];

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.agenda = [];
    this.getSchedule();
  }

  getSchedule(){
    this.agendaService.getSchedule().subscribe((res) => { 
      // console.warn('agenda', data);
      this.agenda = res.obj;
    });
  }

 

}
