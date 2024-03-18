import {Component, OnInit} from '@angular/core';

import { CartItemsService } from 'src/app/core/services/cart-items/cart-items.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private CartItems: CartItemsService) {}

  ngOnInit(): void {
    this.cartItems = this.CartItems.getValue("CartItems");
  }
}


