import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/core/user.service';
import { setSession } from 'src/app/shared/session/api';
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
   passwords: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: []
   },{
    validators: [matchPasswordValidator('password', 'repass') ]
   })
  }); 
 
   
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) { }
  
  registerHandler(): void {
    const { email, passwords } = this.form.value;

   
    const body: CreateUserDto  = {
      email: email!,
      password: passwords?.password!
    }
    this.userService.register$(body).subscribe({
      next:(userData) => {
        setSession(userData);
        this.userService.setLoginInfo(userData, true);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
  

}
