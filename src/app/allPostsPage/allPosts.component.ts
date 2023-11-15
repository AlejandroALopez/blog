import { Component } from "@angular/core";
import { tags } from "../../data/tags";

@Component({
    selector: 'all-posts-page',
    templateUrl: './allPosts.component.html',
    styleUrls: ['./allPosts.component.css']
})
export class AllPostsComponent {
    tags: string[] = tags;
    activeTag: string = "";
}