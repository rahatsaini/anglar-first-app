import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = '';
  isDisabled = false;
  products = ['A Book', 'A Tree'];
  placeholder ="New products"
  constructor(private productservice:ProductsService){
   
    setTimeout(() => {
      this.isDisabled = false;
     
    }, 3000);
  }
  


  


  onProductClick(form)
  {   if(form.valid)
     {
      // this.products.push(form.value.productName);
      this.productservice.addNewProduct(form.value.productName);

     }
     
  }

  OnremoveProduct(productName:string){
   
    this.products = this.products.filter(a=>a!==productName); 
  }


  ngOnInit() {
    this.products = this.productservice.getAllProducts();
    this.productservice.productsUpdate.subscribe(()=>{
      this.products = this.productservice.getAllProducts();
    });
  }

}
