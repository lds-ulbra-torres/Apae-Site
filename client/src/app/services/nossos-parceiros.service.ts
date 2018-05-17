import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NossosParceirosService {
  API_URL = 'http://apaetorres.org.br/doacoes/api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API_URL + "category");
  }

  getPartners(idCategory: number) {
    return this.http.get(this.API_URL + "partnerByCategory/" + idCategory);
  }

}
