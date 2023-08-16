import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserService } from '../../auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private userService: UserService, private router: Router) {}

  canActivate():  boolean | UrlTree {
    if(this.userService.isLogged){
      return true;
    }
    return this.router.createUrlTree(['/login'])
  }

  
}
