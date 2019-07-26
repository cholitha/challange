import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Photo {//PHOTO INTERFACE
  id: string;
  title: string;
  url: string;
}

@Component({
  selector: 'app-photoes',
  templateUrl: './photoes.component.html',
  styleUrls: ['./photoes.component.css']
})
export class PhotoesComponent implements OnInit {
  photoes: Photo[] = [];
  constructor(private http: HttpClient, public route: ActivatedRoute){
   }

  AID: number;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.AID = +params['albumID'] || 0;
    });

    //GET PHOTO BY ALBUM
    var photoURL = "https://jsonplaceholder.typicode.com/photos?albumId=" + this.AID;
    this.http.get<Photo[]>(photoURL).subscribe(data => {
      this.photoes = data;
    });
  }

}
