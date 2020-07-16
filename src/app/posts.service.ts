import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {   tap } from 'rxjs/operators';
import { Post } from './models/post';
import { Comment } from './models/comment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private forumUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.forumUrl}/getAllPosts`)
      .pipe(
        tap(_ => console.log('fetched Stores'))
      );
  }

  addCommentToPost(comment: Comment): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.forumUrl}/addCommentToPost`, { 'comment': comment })
      .pipe(
        tap(_ => console.log(`comment:${comment.message}  added to post with id:${comment.post_id}`))
      );
  }
  
  addPostToForum(post: Post): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.forumUrl}/addPostToForum`, { 'post': post })
      .pipe(
        tap(_ => console.log(`post title:${post.title}  added to post with post id:${post._id}`))
      );
  }



}
