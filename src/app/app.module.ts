import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

// import{FireStoreUtilService} from 'shared/services/fire-store-util.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';






@NgModule({
  declarations: [
    AppComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
