import { NgModule } from '@angular/core';
import { MenubarModule  } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
    exports: [
        MenubarModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        MessagesModule,
        ToastModule, 
        TableModule,
        AvatarModule
    ],
    declarations: [
        
    ],
    providers: [
        
    ]
})
export class PrimeNgModule {}