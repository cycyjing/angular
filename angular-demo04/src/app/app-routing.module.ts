import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { ProductContentComponent } from './product-content/product-content.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-content/:nid', component: NewsContentComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-content/:pid', component: ProductContentComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
