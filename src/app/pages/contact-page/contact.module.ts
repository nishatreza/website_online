import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
// import {ProfileNavbarComponent} from '../../components/profile-navbar/profile-navbar.component';
import {ContactPageHeaderComponent} from '../../components/contact-page-header/contact-page-header.component';
import {ContactFormComponent} from '../../components/contact-form/contact-form.component';

import {ContactPageComponent} from '../../pages/contact-page/contact-page.component';


const routes: Routes = [
  
 
    {path:'', component: ContactPageComponent, pathMatch:'full'}
]
const COMPONENTS = [
  
  ContactPageHeaderComponent,
  ContactFormComponent,
  ContactPageComponent
  
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class ContactModule { }
