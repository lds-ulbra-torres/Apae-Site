
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossosParceirosComponent } from './components/visitor/nossos-parceiros/nossos-parceiros.component';
import { FaleConoscoComponent } from './components/visitor/fale-conosco/fale-conosco.component';
import { EventosComponent } from './components/visitor/eventos/eventos.component';
import { AgendaComponent } from './components/visitor/agenda/agenda.component';
import { DoeAmorComponent } from './components/visitor/doe-amor/doe-amor.component';
import { ApaeTorresComponent } from './components/visitor/apae-torres/apae-torres.component';
import { HomeComponent } from './components/visitor/home/home.component';
import { ParceirosPorCategoriaComponent } from './components/visitor/nossos-parceiros/parceiros-por-categoria/parceiros-por-categoria.component';
import { SiteComponent } from './components/visitor//site/site.component';
import { EventoDetalheComponent } from './components/visitor/eventos/evento-detalhe/evento-detalhe.component';


import { LoginComponent } from './components/adm/login/login.component';
import { HomeAdministradorComponent } from './components/adm/home-administrador/home-administrador.component';
import { AdmComponent } from './components/adm/adm.component';
import { AdmEventosComponent } from './components/adm/adm-eventos/adm-eventos.component';
import { AdmAgendaComponent } from './components/adm/adm-agenda/adm-agenda.component';
import { AdmDoeAmorComponent } from './components/adm/adm-doe-amor/adm-doe-amor.component';
import { AdmApaeTorresComponent } from './components/adm/adm-apae-torres/adm-apae-torres.component';
import { EventoCadastrarComponent } from './components/adm/adm-eventos/evento-cadastrar/evento-cadastrar.component';
import { EventoEditarComponent } from './components/adm/adm-eventos/evento-editar/evento-editar.component';


import { AuthGuardService } from './guards/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: '', component: SiteComponent ,children:[
        { path: 'agenda', component: AgendaComponent },
        { path: 'apae-torres', component: ApaeTorresComponent },
        { path: 'doe-amor', component: DoeAmorComponent },
        { path: 'eventos', component: EventosComponent },
        { path: 'eventos/evento-detalhe/:id', component: EventoDetalheComponent },
        { path: 'fale-conosco', component: FaleConoscoComponent },
        { path: 'nossos-parceiros', component: NossosParceirosComponent },
        { path: 'nossos-parceiros/categoria', component: ParceirosPorCategoriaComponent },
        { path: 'nossos-parceiros/categoria/:id', component: ParceirosPorCategoriaComponent },
        { path: '', component: HomeComponent}
    ] },
    { path: 'admin', component: AdmComponent,children:[
        { path: '', redirectTo:'login' ,pathMatch:'full'},
        { path: 'login', component: LoginComponent },
        { path: 'dashboard', component: HomeAdministradorComponent, /*canActivate:[AuthGuardService],*/ children:[
            { path: 'adm-apae-torres', component: AdmApaeTorresComponent },
            { path: 'adm-doe-amor', component: AdmDoeAmorComponent },
            { path: 'adm-agenda', component: AdmAgendaComponent },
            { path: 'adm-eventos', component: AdmEventosComponent },
            { path: 'adm-eventos/cadastrar', component: EventoCadastrarComponent },
            { path: 'adm-eventos/editar/:id', component: EventoEditarComponent }
        ] }
    ] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});