
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LandingPageNavbarComponent } from './landing-page-navbar/landing-page-navbar.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { LandingPageWorksComponent } from './landing-page-works/landing-page-works.component';
import { LandingPageVideoComponent } from './landing-page-video/landing-page-video.component';

import { LandingPageOfferComponent } from './landing-page-offer/landing-page-offer.component';
import { LandingPageServicesComponent } from './landing-page-services/landing-page-services.component';
import { LandingPageFooterComponent } from './landing-page-footer/landing-page-footer.component';
import { LandingPageBenefitsComponent } from './landing-page-benefits/landing-page-benefits.component';
import { LandingPageWebsiteProComponent } from './landing-page-website-pro/landing-page-website-pro.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';
import { GuidesComponent } from './guides/guides.component';
import { LandingServiceSectionComponent } from './landing-service-section/landing-service-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { FirstStepPageComponent } from './first-step-page/first-step-page.component';
import { LandingPageVideoHeaderComponent } from './landing-page-video-header/landing-page-video-header.component';
import { LandingPageNewNavbarComponent } from './landing-page-new-navbar/landing-page-new-navbar.component';
import { FirstStepNewComponent } from './first-step-new/first-step-new.component';
import { LandingPageNewNavComponent } from './landing-page-new-nav/landing-page-new-nav.component';
import { CommonuiModule } from '../../ui/commonui.module';
// angular.module('app', ['video-background']);
const routes: Routes = [
  
    {path:'', component: LandingPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxCarouselModule,
    NguCarouselModule,
    CommonuiModule
  ],
  declarations: [LandingPageComponent, LandingPageNavbarComponent, LandingPageHeaderComponent, LandingPageWorksComponent, LandingPageVideoComponent, LandingPageOfferComponent, LandingPageServicesComponent, LandingPageFooterComponent, LandingPageBenefitsComponent, LandingPageWebsiteProComponent, CarouselItemComponent, GuidesComponent, LandingServiceSectionComponent, FooterSectionComponent, FirstStepPageComponent, LandingPageVideoHeaderComponent, LandingPageNewNavbarComponent, FirstStepNewComponent, LandingPageNewNavComponent]
})
export class LandingPageModule {

 }
