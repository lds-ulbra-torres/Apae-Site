import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmAgendaComponent } from './adm-agenda.component';
import { AdmAgendaService } from './adm-agenda.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdmAgendaComponent
  ],
  providers: [
    AdmAgendaService
  ],
  exports: [
    AdmAgendaComponent,
  ]
})
export class AdmAgendaModule { }
