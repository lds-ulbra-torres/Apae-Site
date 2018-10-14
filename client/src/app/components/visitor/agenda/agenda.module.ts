import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { AgendaService } from './agenda.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AgendaComponent
  ],
  providers: [
    AgendaService
  ],
  exports: [
    AgendaComponent
  ]
})
export class AgendaModule { }
