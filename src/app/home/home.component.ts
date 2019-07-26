import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Router } from '@angular/router';

export interface User {//USER INTERFACE
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Post {//POST INTERFACE
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  myControl = new FormControl();

  options: User[] = [];
  posts: Post[] = [];
  constructor(private http: HttpClient, private _bottomSheet: MatBottomSheet, public router: Router) { }

  filteredOptions: Observable<User[]>;

  ngOnInit() {
    //GET USERS
    var url = "https://jsonplaceholder.typicode.com/users";
    this.http.get<User[]>(url).subscribe(data => {
      this.options = data;
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  search() {//SEARCH POSTS ACCORDING TO USER
    var userId = this.myControl.value;
    var postUrl = "https://jsonplaceholder.typicode.com/posts?userId=" + userId.id;
    this.http.get<Post[]>(postUrl).subscribe(data => {
      this.posts = data;
    })
  }

  searchAlbums() {//SEARCH ALBUMS ACCORDING TO USER
    var user = this.myControl.value;
    var UID = (user) ? user.id : 0;
    this.router.navigate(['/abums'], { queryParams: { userAi: UID } });
  }

  openCommentArea(post: Post) {//SEARCH COMMENTS ACCORDING TO POST
    this.router.navigate(['/comments'], { queryParams: { postAI: post.id } });
  }

}
