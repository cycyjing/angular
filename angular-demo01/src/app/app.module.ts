import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// root component
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
// decorator, tell ng how to compiling and starting application
@NgModule({
  declarations: [  // components
    AppComponent, NewsComponent, HomeComponent, FormComponent
  ],
  imports: [      // modules
    BrowserModule, FormsModule
  ],
  providers: [],  // services
  bootstrap: [AppComponent]   // root component
})
// root module 根模块
export class AppModule { }
