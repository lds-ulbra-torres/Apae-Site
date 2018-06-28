import { Component, OnInit } from '@angular/core';

import { DoeAmorService } from './../../services/doe-amor.service';

@Component({
  selector: 'app-doe-amor',
  templateUrl: './doe-amor.component.html', 
  styleUrls: ['./doe-amor.component.css']
})
export class DoeAmorComponent implements OnInit {

  campanha: any; 

  enviarMensagem: boolean = false;
  serAssociado: boolean = false;



  constructor(private doeAmorService: DoeAmorService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.doeAmorService.getData().subscribe((dados) => {
      this.campanha = dados;
    });
  }

  onEnviarMensagem(){
    this.enviarMensagem = !this.enviarMensagem;
  }

  onSerAssociado(){
    this.serAssociado = !this.serAssociado;
  }
}

