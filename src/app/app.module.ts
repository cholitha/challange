import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatModule} from './material.theam';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AbumsComponent } from './abums/abums.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotoesComponent } from './photoes/photoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AbumsComponent,
    CommentsComponent,
    PhotoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MatModule,ReactiveFormsModule,HttpClientModule,
    MatExpansionModule,ScrollingModule,MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
