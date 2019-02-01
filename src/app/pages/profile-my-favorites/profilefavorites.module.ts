import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import {ProfileFavoriteMiddleComponent} from '../../components/profile-favorite-middle/profile-favorite-middle.component';

import {ProfileMyFavoritesComponent} from '../../pages/profile-my-favorites/profile-my-favorites.component';


const routes: Routes = [
  
 
    {path:'', component: ProfileMyFavoritesComponent, pathMatch:'full'}
]
const COMPONENTS = [
  ProfileFavoriteMiddleComponent,
  ProfileMyFavoritesComponent


]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
  ],
  declarations: [COMPONENTS]
})
export class ProfilefavoritesModule { }
