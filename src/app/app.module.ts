import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';


import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthenticationService } from './services/authentication.service'
import { AlertService } from './services/alert.service';
import { AlertComponent } from './alert/alert.component'

import { SharedModule } from './shared.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    //CovalentCoreModule.forRoot(),
    HomeModule,
    AppRoutingModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    /**/
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    /**/
    MaterialModule,
    SharedModule,
  ],
  providers: [
      AuthenticationService,
      AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
