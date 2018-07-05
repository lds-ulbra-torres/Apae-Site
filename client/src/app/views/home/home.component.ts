import { FormParceirosService } from './../../services/form-parceiros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  bePartner: boolean = false;
  mensagem: string = '';

  constructor(private formParceirosService: FormParceirosService) { }

  ngOnInit() {
  }
  onSubmit(p){
    console.log(p);
    let parceiro = new FormData();
    parceiro.append('name_partner', p.value.name_partner)
    parceiro.append('name_contact', p.value.name_contact)
    parceiro.append('email', p.value.email)
    parceiro.append('phone', p.value.phone)
    parceiro.append('message', p.value.message)

    this.formParceirosService.serParceiro(parceiro).subscribe((response) => {
      p.reset();
      this.mensagem = "Enviado com sucesso! Logo entraremos em contato.";
      console.log(response);
    })
  }

  togglePartner(){
    this.bePartner = !this.bePartner;
    this.mensagem = '';
  }

} 
