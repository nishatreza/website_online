import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';

import {SupportPageHeaderComponent} from '../../components/support-page-header/support-page-header.component';
import {SupportSectionComponent} from '../../components/support-section/support-section.component';

import {SupportPageComponent} from '../../pages/support-page/support-page.component';


const routes: Routes = [
  
 
    {path:'', component: SupportPageComponent, pathMatch:'full'}
]
const COMPONENTS = [

  SupportPageHeaderComponent,
  SupportSectionComponent,
  SupportPageComponent
  

]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class SupportModule { }
