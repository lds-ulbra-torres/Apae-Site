import { HttpClient } from '@angular/common/http';
import { IEvents } from './../../domain/interfaces/IEvents';
import { Injectable, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Observable} from 'rxjs';

@Injectable()
export class EventosService {

  private API_URL = "http://api-test-apaetorres-org-br.umbler.net/";
  //private API_URL = "http://api.apaetorres.org.br/";

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

  getById(id:number){
    return this.http.get(this.API_URL+"event/"+id);
  }
}
