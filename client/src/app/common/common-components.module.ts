import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorTopModule } from './color-top/color-top.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    ColorTopModule
  ],
  declarations: [
  ],
  exports: [
    NavbarModule,
    ColorTopModule
  ]
})
export class CommonComponentsModule { }
