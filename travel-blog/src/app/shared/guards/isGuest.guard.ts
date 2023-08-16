import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';

import { UserService } from 'src/app/auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsGuestGuard  {
  constructor(private userService: UserService, private router: Router) {}

  canActivate():  boolean | UrlTree {
    if(!this.userService.isLogged){
      return true;
    }
    return this.router.createUrlTree(['/home'])
  }
  
}
