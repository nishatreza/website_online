import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {SigninComponent} from '../../components/signin/signin.component';
import {SigninPageComponent} from '../../pages/signin-page/signin-page.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {ProfileNavComponent} from '../../components/profile-nav/profile-nav.component';


const routes: Routes = [
  
 
    {path:'', component: SigninPageComponent, pathMatch:'full'}
];


@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule.forRoot(),

  ],
  declarations: [SigninPageComponent,
 
    SigninComponent
    // ProfileNavComponent

  ]
})
export class SigninModule { }
