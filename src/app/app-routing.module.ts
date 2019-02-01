import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { AuthService } from './shared/services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard as FirebaseGuard } from './shared/services/auth.guard';
import { AngularFirestoreModule } from 'angularfire2/firestore';


const routes: Routes = [
  { path: '', loadChildren: './pages/landing-page/landing-page.module#LandingPageModule' },
  { path: 'website-builder', loadChildren: './pages/website-builder/website-builder.module#WebsiteBuilderModule' },
  { path: 'markets/:type', loadChildren: './pages/category-page/category-page.module#CategoryPageModule' },
  { path: 'markets/:type/:service', loadChildren: './pages/freelancer-by-category/freelancer-by-category.module#FreelancerByCategoryModule' },
  { path: 'service-detail/:serviceId', loadChildren: './pages/service-detail/service-detail.module#ServiceDetailModule' },
  { path: 'home', loadChildren: './pages/home-page/home-page.module#HomePageModule' },
  { path: 'signin', loadChildren: './pages/signin-page/signin.module#SigninModule' },
  { path: 'my-projects', loadChildren: './pages/my-projectspage/projects.module#ProjectsModule' },
  { path: 'profile-following', loadChildren: './pages/profile-following/profilefollowing.module#ProfilefollowingModule', canActivate: [FirebaseGuard] },
  { path: 'profile-downloads', loadChildren: './pages/profile-downloads/profiledownloads.module#ProfiledownloadsModule', canActivate: [FirebaseGuard] },
  { path: 'profile-subscriptions', loadChildren: './pages/subscription-page/subscriptions.module#SubscriptionsModule', canActivate: [FirebaseGuard] },
  { path: 'profile-support', loadChildren: './pages/support-page/support.module#SupportModule', canActivate: [FirebaseGuard] },
  { path: 'profile-contact', loadChildren: './pages/contact-page/contact.module#ContactModule', canActivate: [FirebaseGuard] },
  { path: 'profile-my-favorites', loadChildren: './pages/profile-my-favorites/profilefavorites.module#ProfilefavoritesModule', canActivate: [FirebaseGuard] },
  { path: 'signup', loadChildren: './pages/signup-page/signup.module#SignupModule' },
  { path: 'terms-of-services-page', loadChildren: './pages/terms-of-services-page/termsofservices.module#TermsofservicesModule' },
  { path: 'profile', loadChildren: './pages/profile-main-page/profilemain.module#ProfilemainModule', canActivate: [FirebaseGuard] },
  { path: 'candidateprofile', component: CandidateProfileComponent },
  { path: 'publicprofile', component: CandidateProfileComponent },
  { path: 'services', loadChildren: './pages/service-page/service-page.module#ServicePageModule', canActivate: [FirebaseGuard] },
  { path: 'create-service', loadChildren: './pages/service-create/service-create.module#ServiceCreateModule', canActivate: [FirebaseGuard] },
  { path: 'edit-service/:serviceId', loadChildren: './pages/edit-service/edit-service.module#EditServiceModule', canActivate: [FirebaseGuard] }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxCarouselModule
  ],
  exports: [FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxCarouselModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: [
    ModalComponent,
    CandidateProfileComponent,
    PublicProfileComponent],
    
  providers: 
  [AuthService,
    FirebaseGuard,
    AngularFireAuthModule,
    AngularFirestoreModule
  ]

})

export class AppRoutingModule { }
