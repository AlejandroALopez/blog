import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../../types/post-types";

@Component({
    selector: 'posts-component',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts(): void {
        this.postService.getAllPosts().subscribe(
            (posts) => {
                this.posts = posts;
            },
            (error) => {
                console.error('Error fetching posts: ', error);
            }
        );
    }
}