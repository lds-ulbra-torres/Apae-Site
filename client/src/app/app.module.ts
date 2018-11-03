import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ], 
  providers: [
	  AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
