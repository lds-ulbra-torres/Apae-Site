import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class FaleConoscoService {

    resourceUrl = "http://api-sei-la.umbler.net/fale-conosco";

    constructor(private http: HttpClient) {
    }

    faleConosco(contato: ContatoFaleConosco) {
        return this.http.post(this.resourceUrl, contato);
    }
}
export class ContatoFaleConosco {
    nome;
    email;
    telefone;
    mensagem;

    constructor(nome, email, telefone, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }
}