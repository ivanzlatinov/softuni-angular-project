import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ArticleItemComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ArticleItemComponent,
  ]
})
export class SharedModule { }
