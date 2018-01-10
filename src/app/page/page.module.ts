import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ClarityModule} from "clarity-angular";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class PageModule { }
