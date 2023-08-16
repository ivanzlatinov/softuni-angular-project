import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { getSession } from '../shared/session/api';


export interface CreatePostDto  { destination: string, title: string, cost: string, duration: string, imgUrl: string, description: string }

const apiUrl = 'http://localhost:3000';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

 createPost(body: {},) {
  return this.http.post(`${apiUrl}/data/catalog`, body,  { headers: { 'x-authorization': getSession().accessToken } })
 }

  
 loadAllPosts() {
  return this.http.get<IPost[]>(`${apiUrl}/data/catalog`)
 }

 loadOnePost(id: string) {
  return this.http.get<IPost>(`${apiUrl}/data/catalog/${id}`)
 }

 deletePost(id: string) {
  return this.http.delete(`${apiUrl}/data/catalog/${id}`,
  { headers: { 'x-authorization': getSession().accessToken } })
 }

 updatePost(post: {}, id: string) {
  return this.http.put(`${apiUrl}/data/catalog/${id}`, post, { headers: { 'x-authorization': getSession().accessToken } } )
 }
}
