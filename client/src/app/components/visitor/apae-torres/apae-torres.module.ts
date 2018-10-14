import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApaeTorresComponent } from './apae-torres.component';
import { ApaeTorresService } from './apae-torres.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApaeTorresComponent
  ],
  providers: [
    ApaeTorresService
  ],
  exports: [
    ApaeTorresComponent
  ]
})
export class ApaeTorresModule { }
