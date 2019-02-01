import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';

// import {SigninNavbarComponent} from '../../components/signin-navbar/signin-navbar.component';
import {TermsOfServiceComponent} from '../../components/terms-of-service/terms-of-service.component';

import {TermsOfServicesPageComponent} from '../../pages/terms-of-services-page/terms-of-services-page.component';


const routes: Routes = [
  
 
    {path:'', component: TermsOfServicesPageComponent, pathMatch:'full'}
]
const COMPONENTS = [
  // SigninNavbarComponent,
  TermsOfServiceComponent,
  TermsOfServicesPageComponent

]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class TermsofservicesModule { }
