import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './components/visitor/home/home.component';
import { ApaeTorresComponent } from './components/visitor/apae-torres/apae-torres.component';
import { NossosParceirosComponent } from './components/visitor/nossos-parceiros/nossos-parceiros.component';
import { AgendaComponent } from './components/visitor/agenda/agenda.component';
import { EventosComponent } from './components/visitor/eventos/eventos.component';
import { FaleConoscoComponent } from './components/visitor/fale-conosco/fale-conosco.component';
import { ColorTopComponent } from './common/color-top/color-top.component';

import { NossosParceirosService } from './services/nossos-parceiros.service';
import { ProcurarCategoriaPipe } from './pipes/procurar-categoria.pipe';
import { ParceirosPorCategoriaComponent } from './components/visitor/nossos-parceiros/parceiros-por-categoria/parceiros-por-categoria.component';
import { SiteComponent } from './components/visitor/site/site.component';

import { LoginComponent } from './components/adm/login/login.component';
import { HomeAdministradorComponent } from './components/adm/home-administrador/home-administrador.component';
import { AdmEventosComponent } from './components/adm/adm-eventos/adm-eventos.component';
import { AdmApaeTorresComponent } from './components/adm/adm-apae-torres/adm-apae-torres.component';
import { AdmAgendaComponent } from './components/adm/adm-agenda/adm-agenda.component';
import { AdmDoeAmorComponent } from './components/adm/adm-doe-amor/adm-doe-amor.component';
import { AdmComponent } from './components/adm/adm.component';
import { EventoDetalheComponent } from './components/visitor/eventos/evento-detalhe/evento-detalhe.component';
import { EventosService } from './services/eventos.service';
import { DoeAmorModule } from './components/visitor/doe-amor/doe-amor.module';

import { AgendaService } from './services/agenda.service';
import { AdmAgendaService } from './services/adm-agenda.service';
import { ApaeTorresService } from './services/apae-torres.service';
import { FormParceirosService } from './services/form-parceiros.service';
import { FaleConoscoService } from './components/visitor/fale-conosco/fale-conosco.service';

import { EventoCadastrarComponent } from './components/adm/adm-eventos/evento-cadastrar/evento-cadastrar.component';
import { EventoEditarComponent } from './components/adm/adm-eventos/evento-editar/evento-editar.component'
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColorTopComponent,
    SiteComponent,
    HomeComponent,
    ApaeTorresComponent,
    NossosParceirosComponent,
    ParceirosPorCategoriaComponent,
    EventosComponent,
    AgendaComponent,
    EventoDetalheComponent,
    FaleConoscoComponent,
    //organizar
    ProcurarCategoriaPipe,
    AdmEventosComponent,
    AdmAgendaComponent,
    AdmApaeTorresComponent,
    AdmDoeAmorComponent,
    LoginComponent,
    HomeAdministradorComponent,
    AdmComponent,
    EventoCadastrarComponent,
    EventoEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
	  DoeAmorModule,
  ], 
  providers: [
    NossosParceirosService, 
    EventosService,
    AgendaService, 
    AdmAgendaService, 
    ApaeTorresService,
    FaleConoscoService,
    FormParceirosService,
	  LoginService,
	  AuthGuardService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
