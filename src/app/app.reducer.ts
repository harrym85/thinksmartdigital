import * as fromUsers from './user';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  users: fromUsers.State;
}


export const reducer: ActionReducerMap<State> = {
  users: fromUsers.reducer
}
