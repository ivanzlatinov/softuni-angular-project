import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../core/interfaces';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article!: IArticle;

  constructor() {

}

ngOnInit(): void {
  
}

}
