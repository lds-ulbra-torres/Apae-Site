import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FormParceirosService } from './form-parceiros.service';
import { WaitingLoaderModule } from '../../../common/waiting-loader/waiting-loader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    FormParceirosService
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
