import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../core/interfaces';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article!: IPost;

  constructor() {

}

ngOnInit(): void {
  
}

}
