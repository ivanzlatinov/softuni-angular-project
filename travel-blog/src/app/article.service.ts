import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment'

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  //TODO change
  loadArticleList(): Observable<IArticle[]> {
 return this.http.get<IArticle[]>(`${apiUrl}/themes`)
  }
}
