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
import { ParceiroDetalhesComponent } from './views/nossos-parceiros/parceiro-detalhes/parceiro-detalhes.component';

const APP_ROUTES: Routes = [
    { path: 'agenda', component: AgendaComponent },
    { path: 'apae-torres', component: ApaeTorresComponent },
    { path: 'doe-amor', component: DoeAmorComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'fale-conosco', component: FaleConoscoComponent },
    { path: 'nossos-parceiros', component: NossosParceirosComponent },
    { path: 'nossos-parceiros/categoria', component: ParceirosPorCategoriaComponent },
    { path: 'nossos-parceiros/categoria/:id', component: ParceirosPorCategoriaComponent },
    { path: 'nossos-parceiros/categoria-:id/parceiro-:id', component: ParceiroDetalhesComponent },
    { path: '', component: HomeComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);