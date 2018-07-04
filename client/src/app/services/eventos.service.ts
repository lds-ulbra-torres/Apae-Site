import { HttpClient } from '@angular/common/http';
import { IEvents } from './../../domain/interfaces/IEvents';
import { Injectable, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Injectable()
export class EventosService {

  private API_URL = "http://api-test-apaetorres-org-br.umbler.net/";

  constructor(private sanitization: DomSanitizer,
    private http: HttpClient) { }


  getAllApi(){
    return this.http.get(this.API_URL+"events");
  }

  delete(idEvento){
    return this.http.delete(this.API_URL+"event/"+idEvento);
  }

  addEvent(event){
    return this.http.post(this.API_URL+"event",event)
      .map((res: Response) => res);
  }

  editEvent(event,idEvent){
    return this.http.put(this.API_URL+"event/"+idEvent,event)
      .map((res: Response) => res);
  }
  

  // getAll() {
  //   return this.eventos;
  // }

  getById(id:number){
    return this.http.get(this.API_URL+"event/"+id);
  }

//   evento1: IEvents = {
//     id: 0,
//     title: 'Geralt of Rivia',
//     main_photo: '../../../../assets/images/imageOne.jpg',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
//     outrasFotos: [
//       {id:0,
//        foto: '../../assets/images/geralt1.jpg'},
//       {id:1,
//         foto: '../../assets/images/geralt2.jpg'},
//       {id:2,
//         foto: '../../assets/images/geralt3.jpg'}
//     ]
//   }
//   evento2: IEvents = {
//     id: 1,
//     title: 'Evento dois',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
//     main_photo: '../../../../assets/images/imageTwo.jpg',
//     outrasFotos: ['foto1','foto2','foto3']
//   }
//   evento3: IEvents = {
//     id: 2,
//     title: 'Evento três',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et arcu gravida, tristique eros quis, vulputate risus. Nam hendrerit eros id turpis euismod, eget cursus lacus maximus. Nunc tincidunt dictum odio, a interdum arcu iaculis ac. Nulla dolor sapien, hendrerit non aliquam eu, luctus eu felis. In cursus mauris eu elit luctus congue. Aenean quis metus molestie, pretium felis ac, eleifend ligula. Aenean cursus, turpis ac volutpat iaculis, massa odio varius est, ut dapibus tortor lacus vitae sem. Aliquam pharetra metus enim. Nullam congue condimentum lacus ac aliquet. Suspendisse potenti. Cras suscipit nibh sed neque pulvinar vehicula. Cras vel sapien.',
//    main_photo: '../../../../assets/images/imageThree.jpg',
//     outrasFotos: ['foto1','foto2','foto3']
//   }

//   eventos: IEvents[] = [
//     this.evento1,
//     this.evento2,
//     this.evento3,
//   ]
}
