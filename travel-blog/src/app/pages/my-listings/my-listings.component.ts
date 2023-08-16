import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { getSession } from 'src/app/shared/session/api';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit{
    postList: IPost[] | null;
    hasPosts: boolean = true;
    user: IUser | null;
    

  constructor(private postService: PostService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.currentUser
    const { _id } = getSession()
    this.postService.loadMyPosts(_id).subscribe({
      next: (posts) => {
        if(!posts) { return }
        this.postList = posts
        if(this.postList.length > 0) {
          this.hasPosts = true
        } else {
          this.hasPosts = false
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
