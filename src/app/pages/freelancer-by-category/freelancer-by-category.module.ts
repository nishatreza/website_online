import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FreelancerByCategoryComponent } from './freelancer-by-category.component';
import { FreelancerByCategoryNavbarComponent } from './freelancer-by-category-navbar/freelancer-by-category-navbar.component';
import { FreelancerByCategoryNavComponent } from './freelancer-by-category-nav/freelancer-by-category-nav.component';
import { FreelancerByCategoryMenubarComponent } from './freelancer-by-category-menubar/freelancer-by-category-menubar.component';
import { LogoDesignTopComponent } from './logo-design-top/logo-design-top.component';
import { FreelancerCategoryFooterComponent } from './freelancer-category-footer/freelancer-category-footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FreelancerGridNewComponent } from './freelancer-grid-new/freelancer-grid-new.component';
import { FreelancerByCategoryHeaderComponent } from './freelancer-by-category-header/freelancer-by-category-header.component';
import { CommonuiModule } from '../../ui/commonui.module';

import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFavouriteServicesComponent } from './user-favourite-services/user-favourite-services.component';



const routes: Routes = [
  
 
    {path:'', component: FreelancerByCategoryComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
    FormsModule 
  ],
  declarations: [FreelancerByCategoryComponent, FreelancerByCategoryNavbarComponent, FreelancerByCategoryNavComponent, FreelancerByCategoryMenubarComponent, LogoDesignTopComponent, FreelancerCategoryFooterComponent, SideMenuComponent, FreelancerGridNewComponent, FreelancerByCategoryHeaderComponent, UserFavouriteServicesComponent]
})
export class FreelancerByCategoryModule { }
