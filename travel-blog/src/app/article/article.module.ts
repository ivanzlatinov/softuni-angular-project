import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ArticleItemComponent } from './article-item/article-item.component';



@NgModule({
  declarations: [
    CatalogComponent,
    ArticleItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogComponent,
    ArticleItemComponent
  ]
})
export class ArticleModule { }
