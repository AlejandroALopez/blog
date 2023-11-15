import { Component } from "@angular/core";
import { PostShort } from "../../types/post-types";
import { POSTS_DATA } from "../../data/test-posts";

@Component({
    selector: 'posts-component',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    posts: PostShort[] = POSTS_DATA;
}