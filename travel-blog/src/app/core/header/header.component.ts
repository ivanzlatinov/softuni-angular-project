import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces';

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

  //get currentUser(): IUser

  logoutHandler(): void {
   this.userService.isLogedOut();
  }
  
}
