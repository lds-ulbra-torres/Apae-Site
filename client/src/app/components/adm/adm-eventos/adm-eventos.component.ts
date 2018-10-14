import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { EventosService } from './../../../services/eventos.service';
import { IEvents } from './../../../../domain/interfaces/IEvents';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-adm-eventos',
  templateUrl: './adm-eventos.component.html',
  styleUrls: ['./adm-eventos.component.css']
})
export class AdmEventosComponent implements OnInit {

  @ViewChild('modalEventDelete') modalDelete: ElementRef;

  eventos: IEvents[];
  status_lista = false;
  first: boolean;

  tituloAtivo: string = '';
  idAtivo: number = 0;
  eventoAtivo: IEvents;

  constructor(private _eventosService: EventosService,
              private router: Router) {
    this.atualizarListaEventos();
  }

  ngOnInit() {
     this.atualizarListaEventos();
  }

  atualizarListaEventos(){
    this._eventosService.getAllApi()
      .map((objetoEvento:any) => objetoEvento.obj)
      .subscribe((allEvents: IEvents[]) => {
        this.eventos = allEvents;
        this.status_lista = true;
      }, () => this.status_lista = false);
  }

  onSubmit(evento: IEvents){
    this._eventosService.delete(this.eventoAtivo.id)
      .subscribe(
        (val) => {   
          this.atualizarListaEventos();
          console.log("sucesso");
        },
        response => {
          console.log("fracasso");
        }
      );
  }

  onClickDelete(evento: IEvents){
    this.eventoAtivo = evento;
    this.tituloAtivo = evento.title;
    this.idAtivo = evento.id;
  }

  onClickUpdate(evento: IEvents){
    this.router.navigate([`/admin/dashboard/adm-eventos/editar/${evento.id}`]);
  }
  

}