import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { PostItemComponent } from './postItem/postItem.component';
import { AllPostsComponent } from './allPostsPage/allPosts.component';
import { HomeComponent } from './homePage/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: AllPostsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllPostsComponent,
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
