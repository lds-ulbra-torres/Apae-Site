import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  consultarLogin(usuarioLogado){
    return this.http.post('http://api.apaetorres.org.br/auth',usuarioLogado);
  }

  userIsLogged(){
    let checklogin = window.sessionStorage.getItem('userLogged');
    if(checklogin=="true"){
      return true;
    }
    else {
      return false;
    }
  }

}
