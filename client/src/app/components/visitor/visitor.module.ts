import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaModule } from './agenda/agenda.module';
import { ApaeTorresModule } from './apae-torres/apae-torres.module';
import { DoeAmorModule } from './doe-amor/doe-amor.module';
import { EventosModule } from './eventos/eventos.module';
import { FaleConoscoModule } from './fale-conosco/fale-conosco.module';
import { HomeModule } from './home/home.module';
import { NossosParceirosModule } from './nossos-parceiros/nossos-parceiros.module';
import { SiteModule } from './site/site.module';

@NgModule({
  imports: [
    CommonModule,
    AgendaModule,
    ApaeTorresModule,
    DoeAmorModule,
    EventosModule,
    FaleConoscoModule,
    HomeModule,
    NossosParceirosModule,
    SiteModule
  ],
  declarations: [],
  exports: [
    AgendaModule,
    ApaeTorresModule,
    DoeAmorModule,
    EventosModule,
    FaleConoscoModule,
    HomeModule,
    NossosParceirosModule,
    SiteModule
  ]
})
export class VisitorModule { }
