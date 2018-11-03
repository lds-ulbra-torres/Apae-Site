import { WaitingLoaderModule } from './../../../common/waiting-loader/waiting-loader.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventoCadastrarComponent } from './evento-cadastrar/evento-cadastrar.component';
import { EventoEditarComponent } from './evento-editar/evento-editar.component';
import { AdmEventosComponent } from './adm-eventos.component';
import { EventosService } from './../../visitor/eventos/eventos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WaitingLoaderModule
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
