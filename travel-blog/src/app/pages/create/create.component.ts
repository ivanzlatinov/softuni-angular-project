import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

   URL_PATTERN = /^https?:\/\/.+/i

  constructor(private fb: FormBuilder){ }

  form = this.fb.group({
     destination: ['', [Validators.required]],
     title: ['', [Validators.required, Validators.minLength(5)]],
     cost: ['', [Validators.required, Validators.min(0.01)]],
     duration: ['', [Validators.required, Validators.minLength(5)]],
     imgUrl: ['', [Validators.required, Validators.pattern(this.URL_PATTERN)]],
     description: ['', [Validators.required, Validators.minLength(15)]]
  })

  newPostHandler(): void {
    console.log(this.form.value)
  }
}
