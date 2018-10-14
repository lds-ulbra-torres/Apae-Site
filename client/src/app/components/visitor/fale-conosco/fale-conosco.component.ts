import { FaleConoscoService } from './fale-conosco.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  mensagem: string = '';

  constructor(private faleConoscoService: FaleConoscoService) { }

  ngOnInit() { 
  }
 
  onSubmit(f){ 
    console.log(f);
    let contato = new FormData();
    contato.append('name', f.value.name)
    contato.append('email', f.value.email)
    contato.append('phone', f.value.phone)
    contato.append('message', f.value.message)

    this.faleConoscoService.faleConosco(contato).subscribe((response) => {
      f.reset();
      this.mensagem = "Enviado com sucesso! Logo entraremos em contato";
      console.log(response);
    });
  }
}
