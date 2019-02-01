import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';
import {HomeHeaderComponent} from '../../components/home-header/home-header.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {ServicesComponent} from '../../components/services/services.component';
import {PortfoliosComponent} from '../../components/portfolios/portfolios.component';
import {ProcessComponent} from '../../components/process/process.component';
import {DownloadComponent} from '../../components/download/download.component';
import {ContactComponent} from '../../components/contact/contact.component';
import {HomePageComponent} from '../../pages/home-page/home-page.component';

import { HomeHeaderTwoComponent } from '../../components/home-header-two/home-header-two.component';
// import { SubscriptionsModule } from '../../pages/subscription-page/subscriptions.module';
// import {SubscriptionPageTitleComponent} from '../../components/subscription-page-title/subscription-page-title.component';
// import {PricingComponent} from '../../components/pricing/pricing.component';
// import {AdvantagesBlockComponent} from '../../components/advantages-block/advantages-block.component';

const routes: Routes = [
  
 
    {path:'', component: HomePageComponent, pathMatch:'full'}
]
const COMPONENTS = [
  HomeHeaderComponent,
  AboutUsComponent,
  ServicesComponent,
  PortfoliosComponent,
  ProcessComponent,
  DownloadComponent,
  ContactComponent,
  HomePageComponent,

  HomeHeaderTwoComponent,
  // SubscriptionPageTitleComponent,
  // PricingComponent,
  // AdvantagesBlockComponent
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    // SubscriptionsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class HomePageModule { }
