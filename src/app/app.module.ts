import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UiModule} from "./ui/ui.module";
import {ClarityModule} from "clarity-angular";

import {PageModule} from "./page/page.module";
import {AppRoutingModule} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {UserModule} from "./user/user.module";
import {reducer} from "./app.reducer";
import {providers} from "./config";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {LoginModule} from "./login/login.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule,
    ClarityModule,
    PageModule,
    LoginModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducer, {
      initialState: {
        users: {
          users: [],
          saving: false,
          selectedUser: null,
          newUser: false
        }
      }
    }),
  ],
  providers: [providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
