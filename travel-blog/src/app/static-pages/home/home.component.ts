import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/pages/post.service';
import { IPost } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recentPostsUpper: IPost[];
  recentPostsLower: IPost[];

constructor(private postService: PostService) {}

ngOnInit(): void {
 this.postService.loadAllPosts().subscribe({
  next: (posts) => {
   this.recentPostsUpper = posts.reverse().slice(0,3);
   this.recentPostsLower = posts.slice(3,5)
  
  },
  error: (err) => {
    console.log(err)
  }
 })
}

}
