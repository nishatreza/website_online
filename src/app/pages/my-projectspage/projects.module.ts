import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui.module';

import {MyProjectsComponent} from '../../components/my-projects/my-projects.component';

import {MyProjectspageComponent} from '../../pages/my-projectspage/my-projectspage.component';
import { CreateProjectModalComponent } from '../../components/create-project-modal/create-project-modal.component';
import { CreateTaskModalComponent } from '../../components/create-task-modal/create-task-modal.component';
import { BackLogModalComponent } from '../../components/back-log-modal/back-log-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  
 
    {path:'', component: MyProjectspageComponent, pathMatch:'full'}
]
const COMPONENTS = [

  MyProjectsComponent,
  MyProjectspageComponent,
  CreateProjectModalComponent,
  CreateTaskModalComponent,
  BackLogModalComponent

]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [COMPONENTS]
})
export class ProjectsModule { }
