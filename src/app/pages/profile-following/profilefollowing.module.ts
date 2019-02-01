import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import {ProfileFollowingMiddleComponent} from '../../components/profile-following-middle/profile-following-middle.component';


import {ProfileFollowingComponent} from '../../pages/profile-following/profile-following.component';


const routes: Routes = [
  
 
    {path:'', component: ProfileFollowingComponent, pathMatch:'full'}
]
const COMPONENTS = [

  ProfileFollowingMiddleComponent,
  ProfileFollowingComponent

 
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class ProfilefollowingModule { }
