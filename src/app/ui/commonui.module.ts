import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from '../components/footer/footer.component';
import {ProfileNavbarComponent} from '../components/profile-navbar/profile-navbar.component';
import {ProfileMenuBarComponent} from '../components/profile-menu-bar/profile-menu-bar.component';
import {SigninNavbarComponent} from '../components/signin-navbar/signin-navbar.component';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {PricingComponent} from '../components/pricing/pricing.component';
import {DropZoneDirective} from '../shared/directives/dropZone';
import {FileSizePipe} from '../shared/pipes/file-size.pipe';

import {GraphicsNavbarComponent} from '../pages/graphics-page/graphics-navbar/graphics-navbar.component';

import {ProfileNavComponent} from '../components/profile-nav/profile-nav.component';
import {SubscriptionPageTitleComponent} from '../components/subscription-page-title/subscription-page-title.component';

const UI = [FooterComponent,
  ProfileNavbarComponent,
  SubscriptionPageTitleComponent,
  ProfileMenuBarComponent,
  SigninNavbarComponent,
  ProfileNavComponent,
  NavbarComponent,
  GraphicsNavbarComponent,
  PricingComponent,
  DropZoneDirective,
  FileSizePipe

];

@NgModule({
 imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UI
   ],
  declarations: [UI]
})
export class CommonuiModule { }
