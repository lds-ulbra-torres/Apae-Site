import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventosComponent } from './eventos.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { EventosService } from './eventos.service';
import { WaitingLoaderModule } from '../../../common/waiting-loader/waiting-loader.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WaitingLoaderModule
  ],
  declarations: [
    EventosComponent,
    EventoDetalheComponent
  ],
  providers: [
    EventosService
  ],
  exports: [
    EventosComponent,
    EventoDetalheComponent
  ]
})
export class EventosModule { }
