import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IUser} from "../../model/interface.user";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {ActionTypes} from "../users.action";
import * as fromUsers from '../users.reducer.share';
import * as usersActions from '../users.action';
import * as root from '../../app.reducer';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {

  user$: Observable<IUser[]>;
  p = 1;
  users: IUser[];

  constructor(private usersService: UsersService,
              private router: Router,
              private  store: Store <root.State>) {
    this.user$ = this.store.select(fromUsers.getUsers);
    this.user$.subscribe(u => this.users = u);
    this.store.dispatch( new usersActions.AllUsersAction());
  }

  editSelectedUser(user) {
    console.log(user._isNew);
    this.store.dispatch({
      type: ActionTypes.SET_SELECTED_USER,
      payload: user
    });
    this.router.navigateByUrl('/user');
  }

}
