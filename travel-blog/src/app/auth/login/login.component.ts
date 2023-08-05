import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(private userService: UserService, private router: Router ) {
  
    
  }

 

  loginHandler(form: NgForm): void {
    //TODO 
    if(form.invalid) { return; }
    this.userService.login();
    this.router.navigate(['/home']);
    
  }
}