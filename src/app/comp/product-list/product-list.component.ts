import { Component, OnInit } from '@angular/core';
// Service
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
// Models
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private _ProductService:ProductService,
    private _CartService:CartService
  ) { }

  products:Product[];

  ngOnInit() {
    this._ProductService.getAllProducts().subscribe(
      data => this.products = data
    );
  }
  updateCart(id,title,quantity){
    this._CartService.updateCart(id,title,quantity);
    //console.log(id)
  }

}
