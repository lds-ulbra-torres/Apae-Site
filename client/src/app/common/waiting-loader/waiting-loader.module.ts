import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitingLoaderComponent } from './waiting-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WaitingLoaderComponent
  ],
  exports: [
    WaitingLoaderComponent
  ]
})
export class WaitingLoaderModule { }
