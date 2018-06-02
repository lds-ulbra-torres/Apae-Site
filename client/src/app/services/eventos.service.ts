import { IEvents } from './../../domain/interfaces/IEvents';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class EventosService {

  evento1: IEvents = {
    id: 0,
    titulo: 'Geralt of Rivia',
    subtitulo: 'Geralt de Rivia, o maior bruxo ja existente na idade média',
    fotoPrincipal: '../../../../assets/images/imageOne.jpg',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
    outrasFotos: [
      {id:0,
       foto: '../../assets/images/geralt1.jpg'},
      {id:1,
        foto: '../../assets/images/geralt2.jpg'},
      {id:2,
        foto: '../../assets/images/geralt3.jpg'}
    ]
  }
  evento2: IEvents = {
    id: 1,
    titulo: 'Evento dois',
    subtitulo: 'Aqui vai uma descrição pro evento dois',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
    fotoPrincipal: '../../../../assets/images/imageTwo.jpg',
    outrasFotos: ['foto1','foto2','foto3']
  }
  evento3: IEvents = {
    id: 2,
    titulo: 'Evento três',
    subtitulo: 'Aqui vai uma descrição pro evento três',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
   fotoPrincipal: '../../../../assets/images/imageThree.jpg',
    outrasFotos: ['foto1','foto2','foto3']
  }

  eventos: IEvents[] = [
    this.evento1,
    this.evento2,
    this.evento3,
  ]

  constructor(private sanitization: DomSanitizer) { }

  getAll() {
    return this.eventos;
  }

  getById(id:number){
    return this.eventos[id];
  }


}
