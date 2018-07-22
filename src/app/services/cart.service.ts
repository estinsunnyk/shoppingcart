import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// Models
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart:Cart[] = [];
  private cartSubject = new BehaviorSubject<number>(0);

  ngOnInit(){
    this.cartSubject.asObservable();
  }
  getCart():Cart[] {
    return this.cart;
  }
  updateCart(id:number,title:string,quantity:number):void {
    let cart = this.cart;
    let productIndex = cart.findIndex( cart => cart['product_id'] === id );
    if(productIndex >= 0){
      this.cart[productIndex]['quantity'] = cart[productIndex]['quantity']+1;
    } else {
      let newCartData = {"product_id":id, "title":title, "quantity":quantity};
      this.cart.push(newCartData);
    }
    //console.log(this.cart);
    // Set cart count
    this.cartSubject.next(this.cart.length)
    //return this.cart;
  }
  getCartCount():any {
    return this.cartSubject;
  }

}
