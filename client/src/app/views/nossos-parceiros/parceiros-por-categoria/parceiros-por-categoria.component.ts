import { IPartners } from './../../../../domain/interfaces/IPartners';
import { NossosParceirosService } from './../../../services/nossos-parceiros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parceiros-por-categoria',
  templateUrl: './parceiros-por-categoria.component.html',
  styleUrls: ['./parceiros-por-categoria.component.css']
})
export class ParceirosPorCategoriaComponent implements OnInit {

  parceiros = null;
  private status_lista = false;

  constructor(private nossosParceirosService: NossosParceirosService,
              private active: ActivatedRoute,
              private router: Router) { 

  }

  consultarParceiros(idCategory: number) {
    this.nossosParceirosService.getPartners(idCategory)
      .map((objetoParceiro:any) => objetoParceiro.partnersByCategory)
      .subscribe((parceiros: IPartners[]) => {
        this.parceiros = parceiros;
        this.status_lista = true;
      }, () => this.status_lista = false);
  }

  backCategorys(){
    this.router.navigate(['/nossos-parceiros'])
  }

  ngOnInit() {
    this.active.params.subscribe(param => {
      if(param['id']){
        this.consultarParceiros(param['id']);
      }
    })
  }

}
