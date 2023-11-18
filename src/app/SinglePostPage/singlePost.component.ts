import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/post-types';
import { PostService } from '../post.service';

@Component({
  selector: 'single-post-component',
  templateUrl: './singlePost.component.html',
  styleUrls: ['./singlePost.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      this.postService.getPostById(postId).subscribe(
        (post) => {
          this.post = post;
        },
        (error) => {
          console.error('Error fetching post: ', error);
        }
      );
    }
  }
}
