import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FotoModule } from '../foto/foto.module';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [ FotoModule ],
  exports: [HomeComponent]
})
export class HomeModule { }