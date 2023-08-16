import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { CreateComponent } from "./create/create.component";
import { MyListingsComponent } from "./my-listings/my-listings.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { AuthGuard } from "../shared/guards/auth.guard";

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
        data: { title: 'Posts' }
      },
      {
        path: 'create',
        canActivate: [AuthGuard],
        component: CreateComponent,
        data: { title: 'Create a post' }
      },
      {
        path: 'my-listings',
        canActivate: [AuthGuard],
        component: MyListingsComponent,
        data: { title: 'My listings' }
      },
      {
        path: 'posts/:postId',
        canActivate: [AuthGuard],
        component: PostDetailsComponent,
        data: { title: 'Details' }
      },
      {
        path: 'posts/edit/:id',
        canActivate: [AuthGuard],
        component: EditPostComponent,
        data: { title: 'Edit' }
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }