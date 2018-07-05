import { IEvents } from './../../../domain/interfaces/IEvents';
import { Component, OnInit } from '@angular/core';

import { EventosService } from './../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventosHome: IEvents[];
  first: boolean;
  status_lista: boolean = false;

  constructor(private _eventosService: EventosService) {
    this.atualizarListaEventos();
  }

  atualizarListaEventos(){
    this._eventosService.getAllApi()
      .map((objetoEvento:any) => objetoEvento.obj)
      .subscribe((allEvents: IEvents[]) => {
        this.eventosHome = allEvents;
        this.status_lista = true;
      }, () => this.status_lista = false);
  }

  ngOnInit() {
  }

}
