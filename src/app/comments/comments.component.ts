import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Comment {//COMMENTS INTERFACE
  id: string;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];
  constructor(private http: HttpClient, public route: ActivatedRoute) { }

  PID: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.PID = +params['postAI'] || 0;
    });

    //GET COMMENTS BY POSTS
    var comentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=" + this.PID;
    this.http.get<Comment[]>(comentsUrl).subscribe(data => {
      this.comments = data;
      console.log(data);
    });
  }



}
