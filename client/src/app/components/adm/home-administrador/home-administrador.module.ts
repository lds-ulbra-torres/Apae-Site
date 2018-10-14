import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdministradorComponent } from './home-administrador.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeAdministradorComponent
  ],
  exports: [
    HomeAdministradorComponent
  ]
})
export class HomeAdministradorModule { }
