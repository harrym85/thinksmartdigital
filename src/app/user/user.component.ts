import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/do';
import {User} from "../model/class.user";
import {Observable} from "rxjs/Observable";
import {UsersService} from "./users.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromUsers from './users.reducer.share';
import 'rxjs/add/operator/do';
import * as root from '../app.reducer';
import {ActionTypes} from "./users.action";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  num$: Observable<boolean>;
  user: User;
  rForm: FormGroup;
  progress: boolean | number = false;
  num = true;
  submitLoading: boolean = false;

  constructor( private usersService: UsersService,
               private formBuilder: FormBuilder,
               private router: Router,
               private store: Store<root.State>) {
    this.user$ = this.store.select(fromUsers.getSelectedUser);
    this.user$.subscribe(u => this.user = u);
    this.num$ = this.store.select(fromUsers.getNewuser);
    this.num$.subscribe(n => this.num = n);
  }


  ngOnInit() {
    console.log(this.user);
    this.rForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      birthDate: [this.user.birthDate, [Validators.required]]
    });
    Object.getOwnPropertyNames(this.rForm.controls)
      .forEach(prop => this.rForm.controls[prop].valueChanges
        .do(val => this.user[prop] = val).subscribe());
  }

  SaveUser() {
    this.submitLoading = true;
    // Submit Logic
    console.log(this.rForm);
   // console.log(this.user.newUser);
    this.store.dispatch({
      type: ActionTypes.SAVE_USERS,
      payload: this.user
    });
    this.submitLoading = false;
  }

  cancel() {
    this.router.navigateByUrl('/dashboard');
  }


}
