import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ApaeTorresComponent } from './views/apae-torres/apae-torres.component';
import { DoeAmorComponent } from './views/doe-amor/doe-amor.component';
import { NossosParceirosComponent } from './views/nossos-parceiros/nossos-parceiros.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { ColorTopComponent } from './components/color-top/color-top.component';
import { NossosParceirosService } from './services/nossos-parceiros.service';
import { ProcurarCategoriaPipe } from './pipes/procurar-categoria.pipe';
import { ParceirosPorCategoriaComponent } from './views/nossos-parceiros/parceiros-por-categoria/parceiros-por-categoria.component';
import { ParceiroDetalhesComponent } from './views/nossos-parceiros/parceiro-detalhes/parceiro-detalhes.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ApaeTorresComponent,
    DoeAmorComponent,
    NossosParceirosComponent,
    AgendaComponent,
    EventosComponent,
    FaleConoscoComponent,
    ColorTopComponent,
    ProcurarCategoriaPipe,
    ParceirosPorCategoriaComponent,
    ParceiroDetalhesComponent,
    AdmEventosComponent,
    AdmAgendaComponent,
    AdmApaeTorresComponent,
    AdmDoeAmorComponent,
    SiteComponent,
    LoginComponent,
    HomeAdministradorComponent,
    AdmComponent,
    EventoDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [NossosParceirosService, EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
