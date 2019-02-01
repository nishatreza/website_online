import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ProfileMiddleComponent} from '../../components/profile-middle/profile-middle.component';
import {ProfileMainPageComponent} from '../../pages/profile-main-page/profile-main-page.component';
import {ProfileMiddleNewComponent} from '../../components/profile-middle-new/profile-middle-new.component';
import {ProfilemiddleAnotherComponent} from '../../components/profilemiddle-another/profilemiddle-another.component';


const routes: Routes = [
  
 
    {path:'', component: ProfileMainPageComponent, pathMatch:'full'}
]
const COMPONENTS = [

  ProfileMiddleComponent,
  ProfileMainPageComponent,
  ProfileMiddleNewComponent,
  ProfilemiddleAnotherComponent


]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [COMPONENTS]
})
export class ProfilemainModule { }
