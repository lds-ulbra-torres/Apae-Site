import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaleConoscoComponent } from './fale-conosco.component';
import { FaleConoscoService } from './fale-conosco.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FaleConoscoComponent
  ],
  providers: [
    FaleConoscoService
  ],
  exports: [
    FaleConoscoComponent
  ]
})
export class FaleConoscoModule { }
