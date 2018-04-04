import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalkUsComponent } from './talk-us/talk-us.component';
import { PhotosComponent } from './photos/photos.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { EventsComponent } from './events/events.component';
import { ApoieComponent } from './apoie/apoie.component';
import { ApaeComponent } from './apae/apae.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apae', component: ApaeComponent },
    { path: 'apoie', component: ApoieComponent },
    { path: 'events', component: EventsComponent },
    { path: 'ourPartners', component: OurPartnersComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'talkUs', component: TalkUsComponent }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);