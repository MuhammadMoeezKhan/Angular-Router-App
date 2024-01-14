import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  singleProduct : any = {id: 1, name: "Guitar", price: 1000};

  constructor(private productService : ProductsService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let searchParameterId = params.get('id')
      
      if (searchParameterId){
        this.productService.getProductBasedOnId(parseInt(searchParameterId, 10)).subscribe((responePayload: any) => {this.singleProduct = responePayload});
        console.log(this.singleProduct)
      }
    })
  }
}
