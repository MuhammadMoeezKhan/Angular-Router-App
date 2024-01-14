import { Injectable  } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {
  products: any[] = [
    {id: 1, name: "Guitar", price: 1000},
    {id: 2, name: "Piano", price: 5000},
    {id: 3, name: "Drums", price: 1200}
  ];

  constructor() { }

  getAllProducts(): any{
    //console.log(this.products);
    return of(this.products);
  }

  getProductBasedOnId(id: number): any{
    //console.log(this.products.find((product) => {id === product.id}));
    //return of(this.products.find((product) => {id === product.id}));
    //console.log(this.products.at(id - 1));
    return of(this.products.at(id - 1));
  }
}