import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostsComponent,
    CreateComponent,
    MyListingsComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,

  ],
  exports: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    PostsComponent,
    CreateComponent,
    MyListingsComponent,
    PostDetailsComponent,
  ]
})
export class PagesModule { }