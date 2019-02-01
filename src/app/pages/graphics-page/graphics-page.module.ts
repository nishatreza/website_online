import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsPageComponent } from './graphics-page.component';
import {CommonuiModule} from '../../ui/commonui.module';
import { Routes, RouterModule } from '@angular/router';
// import { GraphicsNavbarComponent } from './graphics-navbar/graphics-navbar.component';
import { GraphicsResourcesComponent } from './graphics-resources/graphics-resources.component';
import { GraphicsPaginationComponent } from './graphics-pagination/graphics-pagination.component';
import { GraphicsFooterComponent } from './graphics-footer/graphics-footer.component';
// import { ProfileNavbarComponent } from '../../components/profile-navbar/profile-navbar.component';
// import { ProfileNavComponent } from '../../components/profile-nav/profile-nav.component';

const routes: Routes = [


  { path: '', component: GraphicsPageComponent, pathMatch: 'full' }
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraphicsPageComponent, GraphicsResourcesComponent, GraphicsPaginationComponent, GraphicsFooterComponent]
})
export class GraphicsPageModule { }
