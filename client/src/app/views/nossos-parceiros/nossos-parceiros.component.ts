import { NossosParceirosService } from './../../services/nossos-parceiros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossos-parceiros',
  templateUrl: './nossos-parceiros.component.html',
  styleUrls: ['./nossos-parceiros.component.css']
})
export class NossosParceirosComponent implements OnInit {

  categorias: any;

  constructor(private nossosParceirosService: NossosParceirosService) { };

  showConfig() {
    this.nossosParceirosService.getConfig()
      .subscribe(categorys => {
        this.categorias = }
      );
  }

  ngOnInit() {
  }

}
