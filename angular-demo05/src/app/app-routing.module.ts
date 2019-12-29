import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SettingComponent } from './home/setting/setting.component';
import { CategoriesComponent } from './product/categories/categories.component';
import { ListsComponent } from './product/lists/lists.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'setting', component: SettingComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  {
    path: 'product', component: ProductComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'lists', component: ListsComponent },
      { path: '**', redirectTo: 'categories' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
