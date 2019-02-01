import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';



import {AdvantagesBlockComponent} from '../../components/advantages-block/advantages-block.component';
import {FaqComponent} from '../../components/faq/faq.component';
import {SupportPortionComponent} from '../../components/support-portion/support-portion.component';

import {SubscriptionPageComponent} from '../../pages/subscription-page/subscription-page.component';
;

const routes: Routes = [
  
 
    {path:'', component: SubscriptionPageComponent, pathMatch:'full'}
]
const COMPONENTS = [

  // SubscriptionPageTitleComponent,
  // PricingComponent,
  AdvantagesBlockComponent,
  FaqComponent,
  SupportPortionComponent,
  SubscriptionPageComponent


]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    COMPONENTS
  ],
  declarations: [COMPONENTS]
})
export class SubscriptionsModule { }
