import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';
import { CategoryNavbarComponent } from './category-navbar/category-navbar.component';
import { CategorymenubarComponent } from './categorymenubar/categorymenubar.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { CategoryFooterComponent } from './category-footer/category-footer.component';
import { CommonuiModule } from '../../ui/commonui.module';
const routes: Routes = [
  
 
    {path:'', component: CategoryPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPageComponent, CategoryCardComponent, CategoryListComponent, CategoryHeaderComponent, CategoryNavbarComponent, CategorymenubarComponent, CategoryNavComponent, CategoryFooterComponent]
})
export class CategoryPageModule { }
