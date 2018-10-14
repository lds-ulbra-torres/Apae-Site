import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoeAmorComponent } from './doe-amor.component';
import { FormAssociadosService } from './form-associados.service';
import { FaleConoscoService } from './../../../components/visitor/fale-conosco/fale-conosco.service';
import { DoeAmorService } from './doe-amor.service';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DoeAmorComponent
    ],
    providers: [ 
        DoeAmorService, 
        FormAssociadosService,
        FaleConoscoService
    ],
    exports: [
        DoeAmorComponent
    ]
})
export class DoeAmorModule{

}