import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbumsComponent } from './abums/abums.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotoesComponent } from './photoes/photoes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "abums", component: AbumsComponent },
  {path:"comments",component:CommentsComponent},
  {path:"photoes",component:PhotoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
