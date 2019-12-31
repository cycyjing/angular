import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListComponent } from './component/list/list.component';
import { InfoComponent } from './component/info/info.component';


const routes: Routes = [
  {
    path: '', component: ProductComponent,
    // mount in product module
    children: [
      { path: 'info', component: InfoComponent },
      { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  },
  // mount in app module
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
