import { Component, Input } from "@angular/core";
import { Post } from "../../../types/post-types";

@Component({
    selector: 'post-item-module',
    templateUrl: './postItem.component.html',
    styleUrls: ['./postItem.component.css']
})
export class PostItemComponent {
    @Input() postItem: Post;
}