import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, mergeEffects} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as root from '../app.reducer';
import * as actions from './users.action';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {IUser} from '../model/interface.user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ActionTypes} from './users.action';
import {ToastrService} from 'ngx-toastr';
import {BaseHttps} from "./shared/http/base-https";

@Injectable()
export class UsersService extends BaseHttps implements OnDestroy {
  private subscription: Subscription;


  constructor(@Inject('apiBaseUrl') apiBaseUrl,
              http: HttpClient,
              private action$: Actions,
              private store: Store<root.State>,
              private toastr: ToastrService) {
    super(apiBaseUrl, http);
    this.subscription = mergeEffects(this).subscribe();

  }

  private saveUser(user: any) {
    if (user._isNew) {

      return this.postItem('user', user.iUser);
    }else {
      return this.patchItem('user', user.iUser);
    }
  }

  private allUsers() {
    return this.itemsGet('users');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  showSuccess() {
    this.toastr.success('You are awesome!!!, User Saved!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!!! failed to save User', 'Oops!');
  }

  showError2() {
    this.toastr.error('This is not good!!! Unable to load Users due to server problems or connection error', 'Oops!');
  }

  @Effect()
  allUsers$ = this.action$
    .ofType(actions.ActionTypes.ALL_USERS)
    .switchMap(() => this.allUsers()
      .map((users: IUser[]) => { return new actions.LoadUsersAction(users); })
      .catch(() => {
        this.showError2();
        return Observable.of(new actions.SaveUsersFail());
      })).share();

  @Effect()
  saveUsers$ = this.action$
    .ofType(actions.ActionTypes.SAVE_USERS)
    .map((action: actions.SaveUserAction) => action.payload)
    .switchMap(iUser => this.saveUser(iUser)
      .map( user => {
        console.log(user);
        this.showSuccess();
         return ( new actions.SaveUsersSuccesAction(user)
        );
      })
      .catch(() => {
        this.showError();
        return Observable.of(new actions.SaveUsersFail());
      })).share();


}
