import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { PostItemComponent } from './posts/postItem/postItem.component';
import { AllPostsComponent } from './AllPostsPage/allPosts.component';
import { HomeComponent } from './homePage/home.component';
import { SinglePostComponent } from './SinglePostPage/singlePost.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
