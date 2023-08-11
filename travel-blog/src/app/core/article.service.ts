import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './interfaces';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:3000/';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  //TODO change
  loadArticleList(): Observable<IArticle[]> {
 return this.http.get<IArticle[]>(`${apiUrl}/themes`)
  }
}
