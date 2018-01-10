import {Action} from '@ngrx/store';
import {IUser} from '../model/interface.user';
import {User} from '../model/class.user';

export const ActionTypes = {
  ALL_USERS: '[Users] All',
  LOAD_USERS: '[Users] Load',
  SAVE_USERS: '[Users] Add',
  SAVE_USERS_FAIL: '[Users] Add Fail',
  SAVE_USERS_SUCCESS: '[Users] Add Success',
  SET_SELECTED_USER: '[User] Set Selected',
  ADD_NEW_USER: '[User] Add New',
}


export class AddNewUserAction implements  Action {
  type = ActionTypes.ADD_NEW_USER;
}

export class SetSelectedUserAction implements  Action {
  type = ActionTypes.SET_SELECTED_USER;
  constructor( public payload: any) { }
}

export class AllUsersAction implements  Action {
  type = ActionTypes.ALL_USERS;
}

export class LoadUsersAction implements  Action {
  type = ActionTypes.LOAD_USERS;
  constructor(public payload: any) { }
}


export class SaveUserAction implements  Action {
  type = ActionTypes.SAVE_USERS;
  constructor(public payload: User ) { }
}

export class SaveUsersFail implements  Action {
  type = ActionTypes.SAVE_USERS_FAIL;
}

export class SaveUsersSuccesAction implements  Action {
  type = ActionTypes.SAVE_USERS_SUCCESS;
  constructor( public payload: IUser[]) { }
}

export type Actions =
  AddNewUserAction
  |  SetSelectedUserAction
  |  AllUsersAction
  |  LoadUsersAction
  |  SaveUserAction
  |  SaveUsersFail
  |  SaveUsersSuccesAction;
