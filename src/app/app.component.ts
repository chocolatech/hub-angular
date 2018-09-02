import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  repos$;
  username = '';
  public users;
  constructor(private appService: AppService) { }

  ngOnInit() {

  }

  getRepos(): void {
    this.appService.getRepos(this.username)
      .subscribe(users => this.repos$ = users);
  }

  getUsers() {
    this.appService.getUsers().subscribe(response => {
      this.users = response;
      console.log(response);
    },
      () => {
      }
    );
    console.log(this.users);
  }

}
