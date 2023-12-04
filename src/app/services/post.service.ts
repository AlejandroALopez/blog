import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../types/post-types';
import { API_URL } from '../../data/constants';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = `${API_URL}/posts`;
  // private apiUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(postId: string): Observable<Post> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<Post>(url);
  }
}
