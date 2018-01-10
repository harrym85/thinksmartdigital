import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UsersListComponent } from './users-list/users-list.component';
import {ClarityModule} from "clarity-angular";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {UsersService} from "./users.service";
import {ToastrModule} from "ngx-toastr";
import {AppRoutingModule} from "../app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
        preventDuplicates: true,
      }
    ),
    EffectsModule.forFeature([UsersService]),
  ],
  declarations: [UserComponent, UsersListComponent]
})
export class UserModule { }
