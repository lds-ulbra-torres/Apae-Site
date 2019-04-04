import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApoieComponent } from './apoie/apoie.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ApaeComponent } from './apae/apae.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { PhotosComponent } from './photos/photos.component';
import { TalkUsComponent } from './talk-us/talk-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApoieComponent,
    EventsComponent,
    HomeComponent,
    ApaeComponent,
    OurPartnersComponent,
    PhotosComponent,
    TalkUsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
