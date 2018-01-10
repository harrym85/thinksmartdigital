import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UsersService} from "../../user/users.service";
import {Router} from "@angular/router";
import * as fromUsers from '../../user/users.reducer.share';
import * as usersActions from '../../user/users.action';
import {IUser} from "../../model/interface.user";
import {Observable} from "rxjs/Observable";
import * as root from '../../app.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user$: Observable<IUser[]>;
  users: IUser[];

  constructor(private usersService: UsersService,
              private router: Router,
              private  store: Store <root.State>) {
    this.user$ = this.store.select(fromUsers.getUsers);
    this.user$.subscribe(u => this.users = u);
    this.store.dispatch( new usersActions.AllUsersAction());
  }


  ngOnInit() {
  }
  addUser() {
    this.store.dispatch( new usersActions.AddNewUserAction());
    this.router.navigateByUrl('/user');
  }
}
