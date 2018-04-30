import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    ColorTopComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
