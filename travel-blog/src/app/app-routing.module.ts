import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CreateComponent } from './pages/create/create.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'TravelBlog' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About us' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
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
    path: '**',
    component: PageNotFoundComponent,
    data: {title: 'Not Found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
