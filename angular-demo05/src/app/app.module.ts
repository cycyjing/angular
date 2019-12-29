import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SettingComponent } from './home/setting/setting.component';
import { CategoriesComponent } from './product/categories/categories.component';
import { ListsComponent } from './product/lists/lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    WelcomeComponent,
    SettingComponent,
    CategoriesComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
