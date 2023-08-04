import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

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
    component: CatalogComponent,
    data: { title: 'Posts' }
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
