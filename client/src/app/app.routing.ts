import { AuthGuardService } from './guards/auth-guard.service';
import { EventoEditarComponent } from './views/adm/adm-eventos/evento-editar/evento-editar.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossosParceirosComponent } from './views/nossos-parceiros/nossos-parceiros.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { DoeAmorComponent } from './views/doe-amor/doe-amor.component';
import { ApaeTorresComponent } from './views/apae-torres/apae-torres.component';
import { HomeComponent } from './views/home/home.component';
import { ParceirosPorCategoriaComponent } from './views/nossos-parceiros/parceiros-por-categoria/parceiros-por-categoria.component';
import { SiteComponent } from './views/site/site.component';
import { LoginComponent } from './views/login/login.component';
import { HomeAdministradorComponent } from './views/home-administrador/home-administrador.component';
import { AdmComponent } from './views/adm/adm.component';
import { EventoDetalheComponent } from './views/eventos/evento-detalhe/evento-detalhe.component';
import { AdmEventosComponent } from './views/adm/adm-eventos/adm-eventos.component';
import { AdmAgendaComponent } from './views/adm/adm-agenda/adm-agenda.component';
import { AdmDoeAmorComponent } from './views/adm/adm-doe-amor/adm-doe-amor.component';
import { AdmApaeTorresComponent } from './views/adm/adm-apae-torres/adm-apae-torres.component';
import { EventoCadastrarComponent } from './views/adm/adm-eventos/evento-cadastrar/evento-cadastrar.component';

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
        { 
            path: '', redirectTo:'login' ,pathMatch:'full'},
        { path: 'login', component: LoginComponent },
        { path: 'dashboard', component: HomeAdministradorComponent, canActivate:[AuthGuardService], children:[
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