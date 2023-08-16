import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    CreateComponent,
    MyListingsComponent,
    PostDetailsComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,

  ],
  exports: [
    PostsComponent,
    CreateComponent,
    MyListingsComponent,
    PostDetailsComponent,
  ]
})
export class PagesModule { }