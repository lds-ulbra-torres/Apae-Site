import { Component, OnInit } from '@angular/core';

import { NossosParceirosService } from './../../../services/nossos-parceiros.service';
import { ICategory } from './../../../../domain/interfaces/ICategory';
import 'rxjs/add/operator/map';
import { IPartners } from '../../../../domain/interfaces/IPartners';
import { Router } from '@angular/router';
import { ProcurarCategoriaPipe } from '../../../pipes/procurar-categoria.pipe';
@Component({
  selector: 'app-nossos-parceiros',
  templateUrl: './nossos-parceiros.component.html',
  styleUrls: ['./nossos-parceiros.component.css']
})
export class NossosParceirosComponent implements OnInit {

  categorias: ICategory[] = null;
  status_lista = false;
  procuraCategoria: ProcurarCategoriaPipe;

  constructor(private nossosParceirosService: NossosParceirosService, private router: Router) {
    this.atualizarLista();
  };

  atualizarLista() {
    this.nossosParceirosService.getAll()
      .map((objetoCategoria:any) => objetoCategoria.category)
      .subscribe((categorias: ICategory[]) => {
        this.categorias = categorias;
        this.status_lista = true;
      }, () => this.status_lista = false);
      
  }

  consultarParceiros(idCategoria: number) {
    this.router.navigate(['/nossos-parceiros/categoria',idCategoria]);
  }

  ngOnInit() {
  }

}
