import { Injectable } from '@angular/core';
//
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _GlobalService:GlobalService) { }

  getAllProducts(){
    return this._GlobalService.getService('assets/data/product.json');
  }
}
