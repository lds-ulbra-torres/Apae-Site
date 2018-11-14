import { SafeStyle } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { IEvents } from './../../../../../domain/interfaces/IEvents';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventosService } from './../eventos.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef;
  
  evento: IEvents;
  status_evento: boolean = false;
  fotoExpandida = {
    'url' :  "./../../../../../assets/images/no-image.png"
  }
  fotoClicada: boolean = false;

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
  
  encoder(uri){
    return encodeURI(uri);
  }

  expander(imgPosition,target) {
    this.fotoExpandida = this.evento.eventPhotos[imgPosition];
    this.fotoClicada = true;
    var photo = document.getElementById("expanded");
    photo.parentElement.style.display = "block";
    target.scrollIntoView({
      behavior: 'smooth'
    });
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 340), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 340), behavior: 'smooth' });
  }
}
