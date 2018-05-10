import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NossosParceirosService {
  API_URL = 'http://apaetorres.org.br/doacoes/api/category';
  API_PARCEIROS = 'http://apaetorres.org.br/doacoes/api/partnerByCategory/'
  //private categorias = null;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API_URL);
  }

  getPartners(idCategory: number) {
    return this.http.get(this.API_PARCEIROS + idCategory);
  }

}
