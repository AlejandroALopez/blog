import { Component, Input } from "@angular/core";
import { Post } from "../../types/post-types";

@Component({
    selector: 'posts-component',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    @Input() posts: Post[] = [];
}