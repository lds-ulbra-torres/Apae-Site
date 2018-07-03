import { ContatoFaleConosco, FaleConoscoService } from './fale-conosco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  constructor(private faleConoscoService: FaleConoscoService) { }

  ngOnInit() {
  }
 
  onSubmit(form){
    console.log(form);
    const contato = new ContatoFaleConosco(form.controls.nome.value
      , form.controls.email.value
      , form.controls.telefone.value
      , form.controls.mensagem.value);

    this.faleConoscoService.faleConosco(contato).subscribe((response) => {
      console.log(response);
    });
  }
}
