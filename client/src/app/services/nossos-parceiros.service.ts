import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NossosParceirosService {

  constructor(private http: HttpClient) { }

    configUrl = 'assets/nossos-parceiros.json';

    getConfig() {
    return this.http.get(this.configUrl);
    }
}