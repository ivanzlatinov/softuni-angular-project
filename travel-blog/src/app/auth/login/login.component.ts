import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(private acrtivatedRoute: ActivatedRoute,private router: Router, ) {
  
    
  }
  loginHandler(form: NgForm): void {
    if(form.invalid) { return; }
    
  }
}