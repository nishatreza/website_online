import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';

import { EditServiceComponent } from './edit-service.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';


const routes: Routes = [
  
 
  {path:'', component: EditServiceComponent, pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  CommonuiModule,
  AngularFirestoreModule,
  AngularFireStorageModule,
  ],
  declarations: [EditComponent,EditServiceComponent]
})
export class EditServiceModule { }
