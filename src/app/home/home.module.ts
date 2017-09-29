import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { DefaultComponent } from './default/default.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { AuthGuard } from './auth.guard';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared.module'

@NgModule({
    imports: [
        CommonModule,
        //CovalentCoreModule,
        HomeRoutingModule,
        /**/
        CovalentHttpModule,
        CovalentHighlightModule,
        CovalentMarkdownModule,
        /**/
        MaterialModule,
        SharedModule,
    ],
    providers: [
        AuthGuard,
    ],
    declarations: [
        HomeComponent,
        DefaultComponent,
    ]
})
export class HomeModule { }
