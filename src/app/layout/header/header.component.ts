import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// Service
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _CartService:CartService
  ) { }

  private subscription : Subscription;
  private shopCartCount : number = 0;

  ngOnInit() {
    this.subscription = this._CartService.getCartCount().subscribe(
      data => this.shopCartCount = data
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // ngDoCheck(){
  //   this.shopCartCount = this._CartService.getCartCount();
  // }
}
