import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { IPost } from 'src/app/shared/interfaces';
import { PostService } from '../post.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  currentPost: IPost | null
  URL_PATTERN = /^https?:\/\/.+/i
  id: string = ''

  form = this.fb.group({
    destination: ['', [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(5)]],
    cost: ['', [Validators.required, Validators.min(0.01)]],
    duration: ['', [Validators.required, Validators.minLength(5)]],
    imgUrl: ['', [Validators.required, Validators.pattern(this.URL_PATTERN)]],
    description: ['', [Validators.required, Validators.minLength(15)]]
 })

  constructor(private userService: UserService, private postService: PostService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router ) {}

ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id']
   
  this.postService.loadOnePost(this.id).subscribe({
    next: (post) => {
      this.currentPost = post
    },
    error: (err) => {
      console.log(err);
    }
  })
}


editPostHandler(): void {
  const  { destination, title, cost, duration, imgUrl, description } = this.form.value
  const body = { destination, title, cost, duration, imgUrl, description }  

   this.postService.updatePost(body, this.id).subscribe({
    next: (post) => {
      if(!post) { return}
      this.router.navigate([`/posts/${this.id}`])
    },
    error: (err) => {
      console.log(err);
    }
   })
}



}
