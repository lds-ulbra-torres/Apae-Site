import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ApaeTorresComponent } from './views/apae-torres/apae-torres.component';
import { NossosParceirosComponent } from './views/nossos-parceiros/nossos-parceiros.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { ColorTopComponent } from './components/color-top/color-top.component';
import { DoeAmorModule } from './views/doe-amor/doe-amor.module';



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
    ColorTopComponent
  ],
  imports: [
    BrowserModule,
    DoeAmorModule,
    routing,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
