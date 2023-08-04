import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';



@NgModule({
  declarations: [
    ArticleItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleItemComponent,
  ]
})
export class SharedModule { }
