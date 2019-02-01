import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';

import {SignupComponent} from '../../components/signup/signup.component';

import {SignupPageComponent} from '../../pages/signup-page/signup-page.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
 
    {path:'', component: SignupPageComponent, pathMatch:'full'}
]
const COMPONENTS = [

  SignupComponent,
  SignupPageComponent
  

]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule.forRoot()
  ],
  declarations: [COMPONENTS]
})
export class SignupModule { }
