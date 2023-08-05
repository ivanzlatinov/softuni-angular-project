import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/article.service';
import { IArticle } from '../../core/interfaces';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{

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
