import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IEvents } from './../../../../../domain/interfaces/IEvents';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { EventosService } from './../../../visitor/eventos/eventos.service';

@Component({
  selector: 'app-evento-cadastrar',
  templateUrl: './evento-cadastrar.component.html',
  styleUrls: ['./evento-cadastrar.component.css']
})
export class EventoCadastrarComponent implements OnInit {

  @ViewChild('mainImage') image:ElementRef;

  cont: number = 0;  
  novasFotos = new Array(); //fotos
  http: HttpClient;
  filesAtual = new Array(); //arquivos das fotos

  evento = new FormData();

  choosedImage: any;

  loader: boolean = false;
  error: boolean = false;
  
  constructor(private _http: HttpClient,
              private router: Router,
              private _eventoService: EventosService
              ) {
    this.http = _http;
  }

  ngOnInit() {
  }

  changeImage(event){
    this.getBase64(event.target.files[0],(res)=>{
      this.image.nativeElement.style.backgroundImage = `url(${res})`
      this.choosedImage = encodeURI(res);
    })
    this.evento.append('main_photo',(event.target.files[0]));
  }

  getBase64(file,cb){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
     cb(reader.result);
   };
  }

  insertGalery(event,form){
    let files = event.target.files;
    for (let i=0; i<files.length; i++){
      this.getBase64(files[i], (res)=>{
        this.novasFotos.push({'id':this.cont,'url':res});
        this.cont++;
        this.filesAtual.push(files[i]);
      })
    }
  }

  removeFromGalery(index){
    this.novasFotos.splice(index,1);
    this.filesAtual.splice(index,1);
  }

  onSubmit(form){
    this.error = false;
    this.loader = true;
    let eventoCadastro = new FormData();
    eventoCadastro.append('main_photo',this.evento.get('main_photo'));
    eventoCadastro.append('title',form.value.title)
    eventoCadastro.append('description',form.value.description)
    for(let i=0; i<this.filesAtual.length; i++) {
      eventoCadastro.append("photos",this.filesAtual[i]);
    }

    this._eventoService.addEvent(eventoCadastro).subscribe(
      (obJ:any) => {
      this.router.navigate(['/admin/dashboard/adm-eventos']);
    }, response => {
      this.loader = false;
      this.error = true;
    });
  }
  

}
