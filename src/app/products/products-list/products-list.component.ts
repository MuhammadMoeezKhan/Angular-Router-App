import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  products: any[] = [];
  
  constructor(private productServcice : ProductsService) {}
  
  ngOnInit(): void {
    this. productServcice.getAllProducts().subscribe((responsePayload: any) => {this.products = responsePayload})
  }

}
