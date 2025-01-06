import { NgModule } from '@angular/core';
import { MenubarModule  } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
    exports: [
        MenubarModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        ToastModule
    ],
    declarations: [
        
    ],
    providers: [
        
    ]
})
export class PrimeNgModule {}