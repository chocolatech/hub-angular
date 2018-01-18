import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GithubData } from './github.interface';
import { User } from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getRepos(username): Observable<GithubData[]> {
    const usersUrl = `https://api.github.com/users/${username}/repos`;
    return this.http.get<GithubData[]>(usersUrl);
  }
  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }
}
