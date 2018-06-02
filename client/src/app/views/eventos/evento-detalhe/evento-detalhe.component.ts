import { SafeStyle } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { IEvents } from './../../../../domain/interfaces/IEvents';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventosService } from './../../../services/eventos.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  
  evento: IEvents;

  constructor(private eventosService: EventosService, 
              private active: ActivatedRoute,
              private sanitizer: DomSanitizer) {
                 
               }

  consultarEvento(id:number){
    this.evento = this.eventosService.getById(id);
  }

  ngOnInit() {
    this.active.params.subscribe(param => {
      if(param['id']){
        this.consultarEvento(param['id']);
      }
    })
  }

}
