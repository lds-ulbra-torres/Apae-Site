import { AgendaService } from './../../services/agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda: any[];
  agendaFiltered: any[];
  monthFilter: number;

  constructor(private agendaService: AgendaService) { }

  ngOnInit() {
    this.agenda = [];
    this.getSchedule();
    this.monthFilter = -1;
  }

  getSchedule(){
    this.agendaService.getSchedule().subscribe((res) => { 
      // console.warn('agenda', data);
      this.agenda = res.obj;
      this.filter();
    });
  }

  onMonthChange(event) {
    // console.log("selecionou filtro: " + event.target.value + " : " + this.monthFilter);
    this.filter();
  }

  filter() {
    this.agendaFiltered = this.agenda.filter(
      (agenda) => {
        const date = new Date(this.agendaService.convertDateFromServer(agenda.date));
        // console.log("filter ", date);
        // const day = date.getDay();
        const month = date.getMonth();
        // const year = date.getFullYear();
        return this.monthFilter == -1 || month == this.monthFilter;
      }
    )
    
  }

}
