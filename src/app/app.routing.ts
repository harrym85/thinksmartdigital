
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './page/dashboard/dashboard.component';
import {AboutComponent} from "./ui/about/about.component";
import {UsersListComponent} from "./user/users-list/users-list.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'users', component: UsersListComponent },
      { path: 'user', component: UserComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
