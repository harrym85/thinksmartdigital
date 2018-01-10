
import * as root from '../app.reducer';
import * as fromUsers from './users.reducer';
import {createSelector} from 'reselect';

const usersState = (state: root.State) => state.users;

export const getUsers = createSelector(usersState, fromUsers.getUsers);
export const getSelectedUser = createSelector(usersState, fromUsers.getSelectedUser);
export const getUserSpin = createSelector(usersState, fromUsers.getUserSpin);
export const getNewuser = createSelector(usersState, fromUsers.getNewuser);


