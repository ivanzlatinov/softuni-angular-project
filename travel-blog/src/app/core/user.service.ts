import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

export interface CreateUserDto { email: string, username: string, password: string }

@Injectable()
export class UserService {

  apiUrl = 'http://localhost:3000';
  currentUser!: IUser ;
  isLogged: boolean = false;




  constructor(private storage: StorageService, private httpClient: HttpClient) {
  
   }

 
  isLogedOut(): void {
    
    this.storage.setItem('isLogged', false);
  }
  
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.apiUrl}/users/register`, userData);
  }

  login$(userData: { email: String, password: string }) : Observable<IUser> {
     return this.httpClient.post<IUser>(`${this.apiUrl}/users/login`, userData)
     .pipe(tap(user => this.currentUser = user))
  }

  setLoginInfo(user: IUser , status: boolean){
    return (
      this.currentUser = user,
      this.isLogged = status
    )
  }

}
