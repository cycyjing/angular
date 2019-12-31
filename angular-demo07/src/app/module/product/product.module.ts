import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './component/list/list.component';
import { InfoComponent } from './component/info/info.component';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [ProductComponent, ListComponent, InfoComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
