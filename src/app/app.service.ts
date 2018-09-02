import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getRepos(username){
    const usersUrl = `https://api.github.com/users/${username}/repos`;
    return this.http.get(usersUrl);
  }
  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }
}
