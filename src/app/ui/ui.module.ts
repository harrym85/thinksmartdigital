import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import {ClarityModule} from "clarity-angular";
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  declarations: [LayoutComponent, HeaderComponent, MainComponent, AboutComponent, SidebarComponent],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
