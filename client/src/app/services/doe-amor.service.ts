import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DoeAmorService {

  campanhaURL = 'http://localhost:3000/campaign';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(`${this.campanhaURL}`);
  }

}
