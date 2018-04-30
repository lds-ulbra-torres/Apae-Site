import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossosParceirosComponent } from './views/nossos-parceiros/nossos-parceiros.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { DoeAmorComponent } from './views/doe-amor/doe-amor.component';
import { ApaeTorresComponent } from './views/apae-torres/apae-torres.component';
import { HomeComponent } from './views/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'agenda', component: AgendaComponent },
    { path: 'apae-torres', component: ApaeTorresComponent },
    { path: 'doe-amor', component: DoeAmorComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'fale-conosco', component: FaleConoscoComponent },
    { path: 'nossos-parceiros', component: NossosParceirosComponent },
    { path: '', component: HomeComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);