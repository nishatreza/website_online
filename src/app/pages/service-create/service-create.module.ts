import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ServiceCreateComponent } from './service-create.component';


const routes: Routes = [
  
 
  {path:'', component: ServiceCreateComponent, pathMatch:'full'}
]


@NgModule({
imports: [
  CommonModule,
  CommonuiModule, 
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  AngularFirestoreModule,
  AngularFireStorageModule,
 
  
],
  declarations: [ServiceComponent, ServiceCreateComponent]
})
export class ServiceCreateModule { }
