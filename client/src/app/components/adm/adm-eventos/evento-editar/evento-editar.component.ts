import { element } from 'protractor';
import { IEvents } from './../../../../../domain/interfaces/IEvents';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from './../../../visitor/eventos/eventos.service';

@Component({
  selector: 'app-evento-editar',
  templateUrl: './evento-editar.component.html',
  styleUrls: ['./evento-editar.component.css']
})
export class EventoEditarComponent implements OnInit {

  @ViewChild('mainImageEdit') imageEdit:ElementRef;

  evento: IEvents
  status_evento = false;

  oldPhotos = new Array();
  arrayIntPhotoToDelete = new Array();
  allPhotos = new Array();
  newPhotos = new Array();
  newFiles = new Array();
  cont: number;
  eventoEditado = new FormData();
  

  constructor(private _eventosService: EventosService,
              private router: Router, 
              private active: ActivatedRoute) {
               }

  ngOnInit() {
    this.active.params.subscribe(param => {
      if(param['id']){
        this.consultarEvento(param['id']);
      }
    })
  }

  initialImage(){
      this.imageEdit.nativeElement.style.backgroundImage = `url(${this.evento.main_photo})`;
  }
  consultarEvento(id:number){
  this._eventosService.getById(id)
    .map((objetoEvento:any) => objetoEvento.obj)
    .subscribe((event: IEvents) => {
      this.evento = event;
      this.status_evento = true;
      this.initialImage();
      this.oldPhotos = this.evento.eventPhotos;
      if (this.oldPhotos.length>0){
        this.cont = this.oldPhotos[this.oldPhotos.length-1].id +1;
      }
      this.allPhotos = this.oldPhotos.concat(this.newPhotos);
    }, () => this.status_evento = false);
  }

  changeImage(event){
    this.getBase64(event.target.files[0],(res)=>{
      this.imageEdit.nativeElement.style.backgroundImage = `url(${res})`
    })
    this.eventoEditado.append('main_photo',event.target.files[0]);
  }

  insertGaleryNew(event,form){
    let files = event.target.files;
    for (let i=0; i<files.length; i++){
      this.getBase64(files[i], (res)=>{
        this.newPhotos.push({'id':this.cont,'url':res});
        this.cont++
        this.newFiles.push(files[i]);
        this.refreshAllPhotos();
      })
    }
  }

  refreshAllPhotos(){
    this.allPhotos = [];
    this.oldPhotos.forEach(element => {
      this.allPhotos.push(element);
    });
    this.newPhotos.forEach(element => {
      this.allPhotos.push(element);
    });
  }

  removeFromGaleryNew(index){
    this.newPhotos.splice(index,1);
    this.newFiles.splice(index,1);
    this.allPhotos = this.oldPhotos.concat(this.newPhotos);
  }

  removeFromGaleryOld(index){
    this.arrayIntPhotoToDelete.push(this.oldPhotos[index].id);
    this.oldPhotos.splice(index,1);
    this.allPhotos = this.oldPhotos.concat(this.newPhotos);
  }

  getBase64(file,cb){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
     cb(reader.result);
   };
  }

  onSubmit(form){
    this.eventoEditado.append("id", this.evento.id.toString());

    if (this.evento.title != form.value.title && form.value.title != "") {
      this.eventoEditado.append("title",form.value.title);
    }
    if (this.evento.description != form.value.description && form.value.description != ""){
      this.eventoEditado.append("description",form.value.description);
    }
    if(this.newFiles.length>0) {
      this.newFiles.forEach(element => {
        this.eventoEditado.append("photos",element);
      })
    }
    if(this.arrayIntPhotoToDelete.length>0){
      this.arrayIntPhotoToDelete.forEach(element => {
        this.eventoEditado.append("photos_deletada",element);
      });
    }

    this._eventosService.editEvent(this.eventoEditado,this.evento.id).subscribe((obJ:any) => {
      this.router.navigate(['/admin/dashboard/adm-eventos']);
    });
  }

}
