import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdmComponent } from './adm.component';
import { AdmAgendaModule } from './adm-agenda/adm-agenda.module';
import { AdmApaeTorresModule } from './adm-apae-torres/adm-apae-torres.module';
import { AdmDoeAmorModule } from './adm-doe-amor/adm-doe-amor.module';
import { AdmEventosModule } from './adm-eventos/adm-eventos.module';
import { HomeAdministradorModule } from './home-administrador/home-administrador.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdmAgendaModule,
    AdmApaeTorresModule,
    AdmDoeAmorModule,
    AdmEventosModule,
    HomeAdministradorModule,
    LoginModule
  ],
  declarations: [
    AdmComponent
  ],
  exports: [
    AdmComponent,
    AdmAgendaModule,
    AdmApaeTorresModule,
    AdmDoeAmorModule,
    AdmEventosModule,
    HomeAdministradorModule,
    LoginModule
  ]
})
export class AdmModule { }
