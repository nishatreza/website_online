import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommonuiModule } from '../../ui/commonui.module';
import { ServiceDetailComponent } from './service-detail.component';
import { ServiceFaqComponent } from './service-faq/service-faq.component';
import { PackageSellerProfileComponent } from './package-seller-profile/package-seller-profile.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { ServiceCarouselComponent } from './service-carousel/service-carousel.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ServiceReviewsComponent } from './service-reviews/service-reviews.component';
import { ServiceNavbarComponent } from './service-navbar/service-navbar.component';
import { ServiceFooterComponent } from './service-footer/service-footer.component';
import { ServiceNavComponent } from './service-nav/service-nav.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ServiceSellerProfileComponent } from './service-seller-profile/service-seller-profile.component';
// import { EditServiceComponent } from './edit-service/edit-service.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDetailMenubarComponent } from './service-detail-menubar/service-detail-menubar.component';
import { SellerPackagesComponent } from './seller-packages/seller-packages.component';

const routes: Routes = [
  
 
    {path:'', component: ServiceDetailComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxCarouselModule,
    NgbModule.forRoot(),
    CommonuiModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ServiceDetailComponent, ServiceFaqComponent, PackageSellerProfileComponent, ServiceDescriptionComponent, ServiceCarouselComponent, ServiceReviewsComponent, ServiceNavbarComponent, ServiceFooterComponent, ServiceNavComponent, PackageCardComponent, ProfileCardComponent, ServiceSellerProfileComponent, ServiceDetailMenubarComponent, SellerPackagesComponent]
})
export class ServiceDetailModule { }
