import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/article.service';
import { IArticle } from '../../core/interfaces';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent  implements OnInit{

  //TODO
  articleList!: IArticle[];

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
  //  this.articleService.loadArticleList().subscribe(articleList => {
 // this.articleList = articleList;
 //   })
  }

}
