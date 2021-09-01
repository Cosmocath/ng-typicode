import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${environment.typicode_url}/posts`);
  }

  getArticle(id: number): Observable<Article>{
    return this.http.get<Article>(`${environment.typicode_url}/posts/${id}`);
  }

  getArticleComments(articleId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${environment.typicode_url}/posts/${articleId}/comments`);
  }
}
