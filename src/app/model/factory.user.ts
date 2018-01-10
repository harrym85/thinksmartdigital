import {IUser} from './interface.user';
import * as uuid from 'uuid';
import {User} from './class.user';

export class FactoryUser {
  public static mapUser(iUser: IUser): User {
    return new User(iUser, false);

  }


  public static newUser(): User {
    const iUser: IUser = {
      id: uuid.v4() ,
      firstName: '',
      lastName: '',
      birthDate: null
    };
    return new User(iUser, true);
  }

}
