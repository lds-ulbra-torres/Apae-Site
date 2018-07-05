import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApaeTorresService {

  apaeTorresUrl = 'http://api-test-apaetorres-org-br.umbler.net/about';

  constructor(private http: HttpClient) { }

  getAbout(){
    return this.http.get<any>(`${this.apaeTorresUrl}`);
  }

}
