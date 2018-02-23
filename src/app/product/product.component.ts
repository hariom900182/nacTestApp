import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Product } from "../models/product";
import { ProductService } from "../product.service";
import { FormControl, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',												
  styleUrls: ['./product.component.css'],
   providers : [
       Product,
       ProductService
    ]
})
export class ProductComponent implements OnInit {
  modalRef: BsModalRef;
  public data: Product{
  	"name":"",
  	"price":null
  };
  public title:string;
  public products: Product[] = [];
  
   productForm = this.formBuilder.group({
     name: ['', Validators.required],
     price: ['', Validators.required]
  });

  constructor(private modalService: BsModalService,private productService: ProductService, private formBuilder:FormBuilder) { }

  ngOnInit() {
  	
  	
  	this.products = this.productService.getProducts();
  };
  add(template: TemplateRef<any>) {

  	this.title = "Add product";
  	this.data = new Product();
  	this.productForm = this.formBuilder.group({
     name: ['', Validators.required],
     price: ['', Validators.required]
  	});
    this.modalRef = this.modalService.show(template);
  }
  update(template: TemplateRef<any>,product:Product) {
 	this.title = "update product";
  	this.data = product;
    this.modalRef = this.modalService.show(template,{class:"modal-right"});
  }
  delete(model: Product)
  {
  		this.productService.delete(this.data:Product)
  		this.products = this.productService.getProducts();
  }
  submit(form:any)
  {
  	this.data.name= form.controls.name.value;
  	this.data.price = form.controls.price.value;
  	if(this.title === "update product")
  	{
  		this.productService.update(this.data:Product);
  	}
  	else
  	{
  		this.productService.add(this.data:Product);
  	}
  	this.products = this.productService.getProducts();
  	this.modalRef.hide();
  }
}
