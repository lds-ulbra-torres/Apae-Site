import { Component, OnInit } from '@angular/core';

import { FormAssociadosService } from './form-associados.service';
import { FaleConoscoService } from './../../../components/visitor/fale-conosco/fale-conosco.service';
import { DoeAmorService } from './doe-amor.service';

@Component({
  selector: 'app-doe-amor',
  templateUrl: './doe-amor.component.html', 
  styleUrls: ['./doe-amor.component.css']
})
export class DoeAmorComponent implements OnInit {

  campanha: any; 
  mensagem: string = '';
  mensagemA: string = '';

  enviarMensagem: boolean = false;
  serAssociado: boolean = false;

  constructor(private doeAmorService: DoeAmorService,
              private formAssociadosService: FormAssociadosService,
              private faleConoscoService: FaleConoscoService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.doeAmorService.getData().subscribe((dados) => {
      this.campanha = dados.obj;
    });
  }

  onSubmit2(p){ 
    console.log(p);
    let associado = new FormData();
    associado.append('name_associated', p.value.name_associated)
    associado.append('email_associated', p.value.email)
    associado.append('phone_cel', p.value.phone_cel)
    associado.append('phone_home', p.value.phone_home)
    associado.append('phone_commerce', p.value.phone_commerce)

    this.formAssociadosService.serAssociado(associado).subscribe((response) => {
      p.reset();
      this.mensagemA = "Enviado com sucesso! Logo entraremos em contato";
      console.log(response);
    });
  }

  onSubmit1(f){ 
    console.log(f);
    let contato = new FormData();
    contato.append('name', f.value.name)
    contato.append('email', f.value.email)
    contato.append('phone', f.value.phone)
    contato.append('message', f.value.message)

    this.faleConoscoService.faleConosco(contato).subscribe((response) => {
      f.reset();
      console.log(response);
      this.mensagem = "Enviado com sucesso! Logo entraremos em contato";
    });
  }

  onEnviarMensagem(){
    this.enviarMensagem = !this.enviarMensagem;
    this.mensagem = '';
  }

  onSerAssociado(){
    this.serAssociado = !this.serAssociado;
    this.mensagemA = '';
  }
}

