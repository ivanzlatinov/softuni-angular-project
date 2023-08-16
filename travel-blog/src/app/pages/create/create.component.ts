import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/pages/post.service';
import { UserService } from 'src/app/auth/user.service';
import { getSession } from 'src/app/shared/session/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

   URL_PATTERN = /^https?:\/\/.+/i

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router, private userService: UserService){ }

  form = this.fb.group({
     destination: ['', [Validators.required]],
     title: ['', [Validators.required, Validators.minLength(5)]],
     cost: ['', [Validators.required, Validators.min(0.01)]],
     duration: ['', [Validators.required, Validators.minLength(5)]],
     imgUrl: ['', [Validators.required, Validators.pattern(this.URL_PATTERN)]],
     description: ['', [Validators.required, Validators.minLength(15)]]
  })

  newPostHandler(): void {
    const { _id } = getSession()
    const _ownerId = _id;
    const  { destination, title, cost, duration, imgUrl, description} = this.form.value
     const post = { destination, title, cost, duration, imgUrl, description, _ownerId};
     this.postService.createPost(post).subscribe({
      next: (post) => {
        if(!post) { return}
        this.router.navigate(['/posts'])
      },
      error: (err) => {
        console.log(err)
      }
     })

  }

  
}
