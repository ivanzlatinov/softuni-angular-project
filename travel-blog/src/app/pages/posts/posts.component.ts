import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/post.service';
import { IPost } from '../../core/interfaces';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{

  //TODO
  postList: IPost[];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
     this.postService.loadAllPosts().subscribe({
      next: (posts) => {
        this.postList = posts
      },
      error: (err) => {
        console.log(err)
      }
     })
  }

}
