import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';
import { NavbarModule } from '../../../common/navbar/navbar.module';
import { ColorTopModule } from '../../../common/color-top/color-top.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    ColorTopModule
  ],
  declarations: [
    SiteComponent
  ],
  exports: [
    SiteComponent
  ]
})
export class SiteModule { }
