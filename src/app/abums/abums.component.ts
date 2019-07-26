import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Album {//ALBUM INTERFACE
  id: string;
  title: string;
}

@Component({
  selector: 'app-abums',
  templateUrl: './abums.component.html',
  styleUrls: ['./abums.component.css']
})
export class AbumsComponent implements OnInit {
  albums: Album[] = [];
  constructor(private http: HttpClient, public route: ActivatedRoute, public router: Router) { }

  UID: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.UID = +params['userAi'] || 0;//ASSIGN VALUE
    });

    //GET ALBUMS BY USER
    var albumUrl = "https://jsonplaceholder.typicode.com/albums?userId=" + this.UID;
    this.http.get<Album[]>(albumUrl).subscribe(data => {
      this.albums = data;
    });
  }

  viewPhoto(album: Album) {
    this.router.navigate(['/photoes'], { queryParams: { albumID: album.id } });
  }

}
