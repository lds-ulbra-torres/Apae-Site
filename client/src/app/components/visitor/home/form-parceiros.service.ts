import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormParceirosService {

  //resourceUrl = "http://localhost/apae-doacoes/api/pre_partner";
  resourceUrl = "http://doacoes.apaetorres.org.br/api/pre_partner";

  constructor(private http: HttpClient) { }
  serParceiro(parceiro) {
    return this.http.post(this.resourceUrl, parceiro);
  }

}


