import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  consultarLogin(usuarioLogado){
    return this.http.post('http://api-test-apaetorres-org-br.umbler.net/api-docs/auth',usuarioLogado);
  }

}
