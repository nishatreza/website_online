import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteBuilderComponent } from './website-builder/website-builder.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
 
    {path:'', component: WebsiteBuilderComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebsiteBuilderComponent]
})

export class WebsiteBuilderModule { }
