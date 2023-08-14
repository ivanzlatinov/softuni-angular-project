import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../core/interfaces';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() post: IPost;

  constructor() {

}

ngOnInit(): void {
  
}

}
