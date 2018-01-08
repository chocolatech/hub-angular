import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { GithubData } from './github.interface';
import {NgForm} from '@angular/forms';

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
    this.getRepos();
  }

  getRepos(): void {
    this.appService.getRepos(this.username)
      .subscribe(users => this.repos$ = users);
  }
}
