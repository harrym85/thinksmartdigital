import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {IUser} from "../../../model/interface.user";

export class BaseHttps {

  private  headers: Headers;

  constructor(private apiBaseUrl: string , protected http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }


  itemsGet(url: string) {
    const restPath = `${this.apiBaseUrl}/${url}`;
    return this.getItems(restPath);

  }

  getItems(restPath: string) {
    return this.http.get<IUser[]>(restPath);
  }

  postItem(url: string, item, user= null) {
    const it = JSON.stringify(item);
    return this.post(url, it);
  }

  private post(url: string, postItem) {
    const restPath = `${this.apiBaseUrl}/${url}`;
    return this.http.post(restPath, postItem)
      .catch (err => {
        if (err.status === 400 || err.status === 422){
          return Observable.throw(err);
        } else {
          console.log('Problem encountered while trying to post', err);
        }
      });
  }

  patchItem(url: string, item, user= null) {
    const it = JSON.stringify(item);
    return this.patch(url, it);
  }



  private patch(url: string, patchItem) {
    const restPath = `${this.apiBaseUrl}/${url}`;
    return this.http.patch(restPath, patchItem)
      .catch (err => {
        if (err.status === 400 || err.status === 422){
          return Observable.throw(err);
        } else {
          console.log('Problem encountered while trying to update', err);
        }
      });
  }



}

