import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorTopComponent } from './color-top.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ColorTopComponent
  ],
  exports: [
    ColorTopComponent
  ]
})
export class ColorTopModule { }
