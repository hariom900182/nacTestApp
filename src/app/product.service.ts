import { Injectable } from '@angular/core';
import { Product } from "../models/product";

@Injectable()
export class ProductService {
  private products:Product[] = [];
  constructor() { }

  getProducts()
  {

  	return this.products;
  }
  add(model:Product)
  {
  	this.products.push(model);
  }
  update(model:Proudct)
  {
  	 var item = this.products.find(p=>p.name === model.name);
  	 item.name = model.name;
  	 item.price = model.price;
  }
  delete(model:Proudct)
  {

  	const index: number = this.products.indexOf(model);
    if (index !== -1) {
        this.products.splice(index, 1);
    } 
    else
    {
    	 this.products= [];
    }       
  	
  	 
  }

}
