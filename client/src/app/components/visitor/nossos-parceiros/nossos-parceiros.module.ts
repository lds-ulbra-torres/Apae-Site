import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NossosParceirosComponent } from './nossos-parceiros.component';
import { ParceirosPorCategoriaComponent } from './parceiros-por-categoria/parceiros-por-categoria.component';
import { NossosParceirosService } from './nossos-parceiros.service';
import { ProcurarCategoriaPipe } from '../../../pipes/procurar-categoria.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    NossosParceirosComponent,
    ParceirosPorCategoriaComponent,
    ProcurarCategoriaPipe
  ],
  providers: [
    NossosParceirosService,
  ],
  exports: [
    NossosParceirosComponent,
    ParceirosPorCategoriaComponent
  ]
})
export class NossosParceirosModule { }
