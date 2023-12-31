import { Component } from '@angular/core';
import { UserService } from '../../auth/user.service';
import { IUser } from '../../shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  constructor(public userService: UserService){
   
  }

  get currentUser(): IUser | any {
    return this.userService.currentUser;
  }

  logoutHandler(): void {
  this.userService.logout()
  }
  
}
