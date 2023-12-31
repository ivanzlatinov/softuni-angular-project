import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IPost } from 'src/app/shared/interfaces';
import { PostService } from 'src/app/pages/post.service';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  
   currentPost: IPost | null;
   isOwner: Boolean = false;
   Owner: IUser | any;
   OwnerEmail: string;
  constructor( private router: Router,private activatedRoute: ActivatedRoute, private postService: PostService, private userService: UserService) {

  }

  ngOnInit(): void {
   const postId = this.activatedRoute.snapshot.params['postId'];
   

   this.postService.loadOnePost(postId).subscribe({
    next: (post) => {
      this.currentPost = post;
       this.Owner = this.currentPost._ownerId
       
       console.log(this.Owner)
      if(this.Owner === this.userService?.currentUser?._id) {
          this.isOwner = true
      }
    },
    error: (err) => {
      console.log(err);
    }
   })
  
  }

  deletePost(): void {
  const id = this.currentPost?._id

  if(confirm("Are you sure you want to delete this post")) {
  this.postService.deletePost(id!).subscribe({
    next: () => {
     this.router.navigate(['/my-listings'])
    },
    error: (err) => {
      console.log(err);
    }
  })
  }
  }

}
