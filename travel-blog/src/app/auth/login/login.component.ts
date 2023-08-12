import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';
import { setSession } from 'src/app/shared/session/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
   errorMessage: string = '';

  constructor( private fb: FormBuilder ,private userService: UserService, private router: Router ) {}

  EMAIL_PATTERN = /^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$/

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  })
 

  loginHandler(): void {
    const {email, password}: any = this.form.value;
    this.errorMessage = ''
    this.userService.login$({email, password}).subscribe({
      next: (userData) => {
       setSession(userData)
       this.userService.setLoginInfo(userData, true)
       this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
       
      }

    });
    
  }
}