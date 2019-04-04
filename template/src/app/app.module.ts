import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FotoModule } from './foto/foto.module';
import { RouterModule } from '@angular/router';
import { homeRoute } from './home/home.route';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    RouterModule.forRoot([ homeRoute ], { useHash: true, enableTracing: false }) 
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
