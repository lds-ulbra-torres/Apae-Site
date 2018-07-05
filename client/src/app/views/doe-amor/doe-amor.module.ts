import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoeAmorComponent } from './doe-amor.component';
import { DoeAmorService } from './../../services/doe-amor.service';
import { FaleConoscoService } from './../fale-conosco/fale-conosco.service';
import { FormAssociadosService } from './../../services/form-associados.service';





@NgModule ({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DoeAmorComponent
    ],
    providers: [ 
        DoeAmorService , 
        FormAssociadosService,
        FaleConoscoService],
    exports: [
        DoeAmorComponent

    ]
})
export class DoeAmorModule{

}