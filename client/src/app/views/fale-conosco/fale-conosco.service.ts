import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class FaleConoscoService {

    resourceUrl = "http://api-sei-la.umbler.net/fale-conosco";

    constructor(private http: HttpClient) {
    }

    faleConosco(contato) {
        return this.http.post(this.resourceUrl, contato);
    }
}
