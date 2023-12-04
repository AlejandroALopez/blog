import { Component, OnInit } from '@angular/core';
import { tags } from '../../data/tags';
import { Post } from '../../types/post-types';
import { PostService } from '../services/post.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'all-posts-page',
  templateUrl: './allPosts.component.html',
  styleUrls: ['./allPosts.component.css'],
})
export class AllPostsComponent implements OnInit {
  allPosts: Post[] = [];
  filteredPosts: Post[] = [];
  tags: string[] = tags;
  selectedTag: string | null = null;

  constructor(
    private postService: PostService,
    private themeService: ThemeService
  ) {}

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }

  get numResults(): number {
    return this.filteredPosts.length;
  }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.allPosts = posts;
      this.filteredPosts = posts;
    });
  }

  filterByTag(tag: string): void {
    if (this.isTagSelected(tag)) this.clearFilter();
    else {
      this.selectedTag = tag;
      this.filteredPosts = this.allPosts.filter((post) => post.tag === tag);
    }
  }

  clearFilter(): void {
    this.selectedTag = null;
    this.filteredPosts = this.allPosts;
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTag === tag;
  }
}
