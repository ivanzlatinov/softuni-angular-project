import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { getSession, logoutSession } from '../shared/session/api';
import { Router } from '@angular/router';

export interface CreateUserDto { email: string, username: string, password: string }

@Injectable()
export class UserService {

  apiUrl = 'http://localhost:3000';
  currentUser!: IUser | null ;
  isLogged: boolean = false;




  constructor( private httpClient: HttpClient, private router: Router) {
  
   }

 
  
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.apiUrl}/users/register`, userData);
  }

  login$(userData: { email: String, password: string }) : Observable<IUser> {
     return this.httpClient.post<IUser>(`${this.apiUrl}/users/login`, userData)
     .pipe(tap(user => this.currentUser = user))
  }

  logout() {
    if(!getSession()) { return}
    logoutSession()
    this.setLoginInfo(null, false)
    this.router.navigate(['/'])
  }

  setLoginInfo(user: IUser | null , status: boolean){
    return (
      this.currentUser = user,
      this.isLogged = status
    )
  }

  

}
