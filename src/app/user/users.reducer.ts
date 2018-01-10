import {IUser} from '../model/interface.user';
import {FactoryUser} from '../model/factory.user';
import * as actions from './users.action';
import {User} from '../model/class.user';


export interface State {
  users: IUser[];
  selectedUser: User;
  saving: boolean;
  newUser: boolean;
}



export function  reducer (state: State, action: any): State  {

  switch (action.type) {

    case actions.ActionTypes.ADD_NEW_USER: {

      const newUser: User = FactoryUser.newUser();
      return Object.assign({}, state, {selectedUser: newUser, newUser: true });
    }

    case actions.ActionTypes.ALL_USERS: {
      return Object.assign({}, state, {saving: true});
    }

    case actions.ActionTypes.SET_SELECTED_USER: {
      return Object.assign({}, state, {selectedUser: action.payload, newUser: false});
    }


    case actions.ActionTypes.LOAD_USERS: {
      const iUsers: IUser[] = action.payload;
      const users: User[] = iUsers.map(FactoryUser.mapUser);
      return Object.assign({}, state, {saving: false , users: users});
    }

    case actions.ActionTypes.SAVE_USERS_FAIL: {
      return Object.assign({}, state, {saving: false});
    }


    case actions.ActionTypes.SAVE_USERS_SUCCESS: {
      const item = FactoryUser.mapUser((action as any).payload);
      const existing = state.users.filter(r => r.id !== item.id);
      const users = [...existing, item];
      return Object.assign({}, state, {users: users, saving: false});
    }

    case actions.ActionTypes.SAVE_USERS: {
      return state;
    }



    default:
      return state;
  }

}

export const getUsers = (state: State) => state.users;
export const getSelectedUser = (state: State) => state.selectedUser;
export const getUserSpin = (state: State) => state.saving;
export const getNewuser = (state: State) => state.newUser;

