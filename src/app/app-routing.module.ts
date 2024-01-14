import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UnknownPathComponent } from './unknown-path/unknown-path.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '**', component: UnknownPathComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }