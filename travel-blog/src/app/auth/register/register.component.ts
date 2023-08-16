import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/auth/user.service';
import { setSession } from 'src/app/shared/session/api';
import { matchPasswordValidator } from 'src/app/shared/validators';
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  errorMessage: string = '';

  EMAIL_PATTERN = /^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$/

  form = this.fb.group({
   email: ['', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
   username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
   passwords: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: []
   },{
    validators: [matchPasswordValidator('password', 'repass') ]
   })
  }); 
 
   
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) { }
  
  registerHandler(): void {
    const { email, username, passwords } = this.form.value;

   
    const body: CreateUserDto  = {
      email: email!,
      username: username!,
      password: passwords?.password!
    }
    this.userService.register$(body).subscribe({
      next:(userData) => {
        setSession(userData);
        this.userService.setLoginInfo(userData, true);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }
  

}
