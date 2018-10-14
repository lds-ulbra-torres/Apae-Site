import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
