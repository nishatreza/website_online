import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import {ProfileDownloadsMiddleComponent} from '../../components/profile-downloads-middle/profile-downloads-middle.component';
import {ProfileDownloadsComponent} from '../../pages/profile-downloads/profile-downloads.component';

const routes: Routes = [
  
 
    {path:'', component: ProfileDownloadsComponent, pathMatch:'full'}
]
const COMPONENTS = [
  ProfileDownloadsMiddleComponent,
  ProfileDownloadsComponent


]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class ProfiledownloadsModule { }
