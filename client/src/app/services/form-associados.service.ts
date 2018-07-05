import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormAssociadosService {

  //resourceUrl = "http://localhost/apae-doacoes/api/pre_associated";
  resourceUrl = "http://doacoes.apaetorres.org.br/api/pre_associated";

  constructor(private http: HttpClient) { }

  serAssociado(associado) {
    return this.http.post(this.resourceUrl, associado);
  }
} 



