import { Component, OnInit } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { Post } from '../../types/post-types';
import { PostService } from '../services/post.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  POSTS_NUMBER: number = 6;
  latestPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getLatestPosts();
  }

  getLatestPosts(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.latestPosts = posts.slice(0, this.POSTS_NUMBER);
    });
  }
}
