import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { GithubData } from './github.interface';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { Subject } from 'rxjs/Subject';

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
  users$: User[];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getUsers();
  }

  getRepos(): void {
    this.appService.getRepos(this.username)
      .subscribe(users => this.repos$ = users);
  }

  getUsers() {
    // this.users$ = this.appService.getUsers();
    this.appService.getUsers().subscribe(response => this.users$ = response,
      () => {
        console.log('loooool');
      }
    );
  }

}
