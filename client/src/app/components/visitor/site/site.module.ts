import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';
import { CommonComponentsModule } from './../../../common/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule
  ],
  declarations: [
    SiteComponent
  ],
  exports: [
    SiteComponent
  ]
})
export class SiteModule { }
