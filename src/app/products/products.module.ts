import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  providers: [
    ProductsService
  ],
  imports: [
    CommonModule,
    RouterModule
  ] 
})
export class ProductsModule { }
