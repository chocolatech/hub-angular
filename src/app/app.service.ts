import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {GithubData} from './github.interface';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }



  getUsers(username): Observable<GithubData[]> {
    const usersUrl = `https://api.github.com/users/${username}/repos`;
    return this.http.get<GithubData[]>(usersUrl);
  }

}
