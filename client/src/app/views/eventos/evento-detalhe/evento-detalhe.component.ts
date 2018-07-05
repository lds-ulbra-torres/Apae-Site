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
  status_evento: boolean = false;

  constructor(private eventosService: EventosService, 
              private active: ActivatedRoute) {
                this.active.params.subscribe(param => {
                  if(param['id']){
                    this.consultarEvento(param['id']);
                  }
                })
               }

  consultarEvento(id:number){
    this.eventosService.getById(id)
      .map((objetoEvento:any) => objetoEvento.obj)
      .subscribe((event: IEvents) => {
        this.evento = event;
        this.status_evento = true;
      }, () => this.status_evento = false);
  }

  ngOnInit() {
    
  }

}
