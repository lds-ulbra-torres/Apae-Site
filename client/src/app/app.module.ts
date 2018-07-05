import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ApaeTorresComponent } from './views/apae-torres/apae-torres.component';
import { NossosParceirosComponent } from './views/nossos-parceiros/nossos-parceiros.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { ColorTopComponent } from './components/color-top/color-top.component';

import { NossosParceirosService } from './services/nossos-parceiros.service';
import { ProcurarCategoriaPipe } from './pipes/procurar-categoria.pipe';
import { ParceirosPorCategoriaComponent } from './views/nossos-parceiros/parceiros-por-categoria/parceiros-por-categoria.component';
import { SiteComponent } from './views/site/site.component';
import { LoginComponent } from './views/login/login.component';
import { HomeAdministradorComponent } from './views/home-administrador/home-administrador.component';
import { AdmEventosComponent } from './views/adm/adm-eventos/adm-eventos.component';
import { AdmApaeTorresComponent } from './views/adm/adm-apae-torres/adm-apae-torres.component';
import { AdmAgendaComponent } from './views/adm/adm-agenda/adm-agenda.component';
import { AdmDoeAmorComponent } from './views/adm/adm-doe-amor/adm-doe-amor.component';
import { AdmComponent } from './views/adm/adm.component';
import { EventoDetalheComponent } from './views/eventos/evento-detalhe/evento-detalhe.component';
import { EventosService } from './services/eventos.service';
import { DoeAmorModule } from './views/doe-amor/doe-amor.module';
import { EventoCadastrarComponent } from './views/adm/adm-eventos/evento-cadastrar/evento-cadastrar.component';
import { EventoEditarComponent } from './views/adm/adm-eventos/evento-editar/evento-editar.component'
import { LoginService } from './services/login.service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ApaeTorresComponent,
    NossosParceirosComponent,
    AgendaComponent,
    EventosComponent,
    FaleConoscoComponent,
    ColorTopComponent,
    ProcurarCategoriaPipe,
    ParceirosPorCategoriaComponent,
    AdmEventosComponent,
    AdmAgendaComponent,
    AdmApaeTorresComponent,
    AdmDoeAmorComponent,
    SiteComponent,
    LoginComponent,
    HomeAdministradorComponent,
    AdmComponent,
    EventoDetalheComponent,
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
 
  providers: [NossosParceirosService, EventosService,LoginService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
