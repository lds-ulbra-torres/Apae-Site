import { Component, OnInit } from '@angular/core';

import { EventosService } from './../../../services/eventos.service';
import { IEvents } from './../../../../domain/interfaces/IEvents';

@Component({
  selector: 'app-adm-eventos',
  templateUrl: './adm-eventos.component.html',
  styleUrls: ['./adm-eventos.component.css']
})
export class AdmEventosComponent implements OnInit {

  eventos: IEvents[];
  first: boolean;

  constructor(_eventosService: EventosService) {
    this.eventos = _eventosService.getAll()  
  }

  ngOnInit() {
  }

}
