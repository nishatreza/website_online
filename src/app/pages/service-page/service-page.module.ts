import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from '../../pages/service-page/service-page.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import { MyServicesComponent } from '../../pages/service-page/my-services/my-services.component';

import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { CreateServiceComponent } from './create-service/create-service.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  
 
  {path:'', component: ServicePageComponent, pathMatch:'full'}
]


@NgModule({
imports: [
  CommonModule,
  CommonuiModule,
  ArchwizardModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  AngularFireStorageModule,
  FlashMessagesModule.forRoot(),
  NgxPaginationModule,
  
],
  declarations: [ServicePageComponent, MyServicesComponent,
    CreateServiceComponent,
   ]
})
export class ServicePageModule { }
