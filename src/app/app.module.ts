import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';

import { HttpClientModule } from "@angular/common/http";
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article-list/article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CommentComponent } from './article-page/comment/comment.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticlePageComponent,
    CommentComponent,
    SpinnerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
