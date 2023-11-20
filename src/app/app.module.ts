import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { PostItemComponent } from './posts/postItem/postItem.component';
import { AllPostsComponent } from './AllPostsPage/allPosts.component';
import { HomeComponent } from './homePage/home.component';
import { SinglePostComponent } from './SinglePostPage/singlePost.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: 'posts/:postId', component: SinglePostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllPostsComponent,
    SinglePostComponent,
    PostsComponent,
    PostItemComponent,
    FooterComponent,
    CodeSnippetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          javascript: () => import('highlight.js/lib/languages/javascript'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
