import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonuiModule} from '../../ui/commonui.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule ,
    CommonuiModule
  ],
  declarations: [UpdateComponent]
})
export class ServiceUpdateModule { }
