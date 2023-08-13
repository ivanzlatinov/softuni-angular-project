import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces';
import { Observable } from 'rxjs';
import { getSession } from '../shared/session/api';


export interface CreatePostDto  { destination: string, title: string, cost: string, duration: string, imgUrl: string, description: string }

const apiUrl = 'http://localhost:3000/';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

 createPost(body: {},) {
  return this.http.post(`${apiUrl}data/catalog`, body,  { headers: { 'x-authorization': getSession().accessToken } })
 }

  //TODO change
  loadArticleList(): Observable<IPost[]> {
 return this.http.get<IPost[]>(`${apiUrl}/themes`)
  }
}
