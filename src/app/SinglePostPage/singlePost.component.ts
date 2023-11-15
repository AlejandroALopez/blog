import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PostShort } from "../../types/post-types";
import { POSTS_DATA } from "../../data/test-posts";

@Component({
    selector: 'single-post-component',
    templateUrl: './singlePost.component.html',
    styleUrls: ['./singlePost.component.css']
})
export class SinglePostComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    post: PostShort | undefined;

    ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const postIdFromRoute = String(routeParams.get('postId'));
      
        // Find the product that correspond with the id provided in route.
        this.post = POSTS_DATA.find(post => post.id === postIdFromRoute);
      }
}