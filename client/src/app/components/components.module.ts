import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmModule } from './adm/adm.module';
import { VisitorModule } from './visitor/visitor.module';

@NgModule({
  imports: [
    CommonModule,
    AdmModule,
    VisitorModule
  ],
  declarations: [],
  exports: [
    AdmModule,
    VisitorModule
  ]
})
export class ComponentsModule { }
