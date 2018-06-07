import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoeAmorComponent } from './doe-amor.component';
import { DoeAmorService } from './../../services/doe-amor.service';



@NgModule ({
    imports: [
        CommonModule
    ],
    declarations: [
        DoeAmorComponent
    ],
    providers: [ DoeAmorService ],
    exports: [
        DoeAmorComponent

    ]
})
export class DoeAmorModule{

}