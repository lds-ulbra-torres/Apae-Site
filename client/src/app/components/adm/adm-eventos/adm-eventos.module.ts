import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoCadastrarComponent } from './evento-cadastrar/evento-cadastrar.component';
import { EventoEditarComponent } from './evento-editar/evento-editar.component';
import { AdmEventosComponent } from './adm-eventos.component';
import { EventosService } from './../../visitor/eventos/eventos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdmEventosComponent,
    EventoCadastrarComponent,
    EventoEditarComponent
  ],
  providers: [
    EventosService
  ],
  exports: [
    AdmEventosComponent,
    EventoCadastrarComponent,
    EventoEditarComponent
  ]
})
export class AdmEventosModule { }
