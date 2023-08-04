import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordValidator } from 'src/app/shared/validators';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  EMAIL_PATTERN = /^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$/

  form = this.fb.group({
   email: ['', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
   username: ['', [Validators.required, Validators.minLength(5)]],
   passwords: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: []
   },{
    validators: [matchPasswordValidator('password', 'repass') ]
   })
  }); 
 
   
  constructor(private fb: FormBuilder,  ) { }

  registerHandler() {
   
    
  }

}
