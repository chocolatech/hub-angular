import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { GithubData } from './github.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'app';
  repos$: GithubData[];
  username = 'senssei';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.appService.getUsers(this.username)
      .subscribe(users => this.repos$ = users);
  }
}
