import { IEvents } from './../../../domain/interfaces/IEvents';
import { Component, OnInit } from '@angular/core';

import { EventosService } from './../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: IEvents[];
  first: boolean;

  constructor(_eventosService: EventosService) {
    this.eventos = _eventosService.getAll()  
  }

  ngOnInit() {
  }

}
