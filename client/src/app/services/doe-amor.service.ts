import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DoeAmorService {

  //campanhaURL = 'http://api-test-apaetorres-org-br.umbler.net/campaign';
  campanhaURL = 'http://api.apaetorres.org.br/campaign';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(`${this.campanhaURL}`);
  }

}
