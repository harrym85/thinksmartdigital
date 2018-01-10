import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ClarityModule} from "clarity-angular";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app.routing";


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
