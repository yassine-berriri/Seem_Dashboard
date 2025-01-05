import { NgModule } from '@angular/core';
import { MenubarModule  } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
    exports: [
        MenubarModule,
        CardModule,
        InputTextModule,
        ButtonModule
    ],
    declarations: [
        
    ],
    providers: [
        
    ]
})
export class PrimeNgModule {}