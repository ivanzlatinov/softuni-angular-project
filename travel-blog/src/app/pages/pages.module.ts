import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogComponent } from './catalog/catalog.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    CatalogComponent,
  ]
})
export class PagesModule { }