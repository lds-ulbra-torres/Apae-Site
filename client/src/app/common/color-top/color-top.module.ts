import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorTopComponent } from './color-top.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ColorTopComponent
  ],
  exports: [
    ColorTopComponent
  ]
})
export class ColorTopModule { }
