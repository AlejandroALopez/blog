import { Component, Input } from '@angular/core';
import { Post } from '../../../types/post-types';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'post-item-module',
  templateUrl: './postItem.component.html',
  styleUrls: ['./postItem.component.css'],
})
export class PostItemComponent {
  @Input() postItem: Post;

  constructor(private themeService: ThemeService) {}

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }
}
