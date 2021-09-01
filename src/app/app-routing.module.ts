import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // redirection
  {path: "", redirectTo: "articles", pathMatch: "full"},
  // Routes pour la section utilisateur
  {path: "users", component: UserListComponent, pathMatch: "full"},
  // Routes pour les articles
  {path: "articles", children:[
    {path: "", component: ArticleListComponent, pathMatch: "full"},
    {path: ":id", component: ArticlePageComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
