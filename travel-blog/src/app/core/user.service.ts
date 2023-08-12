import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient } from '@angular/common/http';

export interface CreateUserDto { email: string, password: string }

@Injectable()
export class UserService {

  apiUrl = 'http://localhost:3000';

  isLogged = false;

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    this.isLogged = this.storage.getItem('isLogged')
   }

  isLoggedIn(): void{
  this.isLogged = true;
  this.storage.setItem('isLogged', true);
  }

  isLogedOut(): void {
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
  }
  
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.apiUrl}/users/register`, userData);
  }

}
