
import {IUser} from './interface.user';

export class User implements IUser {
  private  _isNew: boolean;
  private  iUser: IUser;

  constructor(iUser: IUser, isNew: boolean) {
    this._isNew =  isNew;
    this.iUser = iUser;
  }

  get id(): string {return this.iUser.id; }
  get firstName(): string {return this.iUser.firstName; }
  get lastName(): string {return this.iUser.lastName; }
  get birthDate(): Date {return this.iUser.birthDate; }
  get newUser(): boolean {return this._isNew; }

  set id(value: string) {
    if (this.id !== value) {
      this.iUser.id = value;
    }
  }

  set firstName(value: string) {
    if (this.firstName !== value) {
      this.iUser.firstName = value;
    }
  }

  set lastName(value: string) {
    if (this.lastName !== value) {
      this.iUser.lastName = value;
    }
  }

  set birthDate (value: Date) {
    if (this.birthDate !== value) {
      this.iUser.birthDate = value;
    }
  }

}
