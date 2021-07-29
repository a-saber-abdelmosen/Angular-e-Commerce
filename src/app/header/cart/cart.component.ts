import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { CartProduct } from 'src/app/Shared/CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  set cartCount(value: number) { 
    this._cartCount = value;
    this.cartContent = this._cartService.GetCartContent();
    this.UpdateTotal();
  }

  get cartCount() {return this._cartCount}

  private _cartCount: number = 0;
  cartContent: CartProduct[] =[];
  total: number = 0;
  constructor(
    private _cartService: CartService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this._cartService.CartCount().subscribe(d => this.cartCount = d);
    this._cartService.UpdateCartCount();
    this.cartContent = this._cartService.GetCartContent();
  }

  UpdateTotal(): void{
    this.total = 0;
    for (let i = 0; i < this.cartContent.length; i++) {
      const prod = this.cartContent[i];
      this._productService.GetProductById(prod.Product_Id).subscribe(d => this.total+= d.Offer_Price*prod.Quantity)
    }
  }
}
