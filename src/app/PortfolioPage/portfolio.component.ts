import { Component, OnInit } from '@angular/core';
import { tags } from '../../data/tags';
import { Post } from '../../types/post-types';
import { PostService } from '../services/post.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  allPosts: Post[] = [];
  filteredPosts: Post[] = [];
  selectedTag: string = "portfolio";

  constructor(
    private postService: PostService,
    private themeService: ThemeService
  ) {}

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }

  ngOnInit(): void {
    this.loadAllPosts();
    // this.filterByTag();
  }

  loadAllPosts(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.allPosts = posts;
      this.filteredPosts = this.filterByTag();
    });
  }

  filterByTag(): Post[] {
    return this.allPosts.filter((post) => post.tag.toLowerCase() === this.selectedTag.toLowerCase());
  }
}
