import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() item!: product;
  @Output() SendItem = new EventEmitter;

  AddtoCart(item: product) {
    this.SendItem.emit({name: item.title, quantity: item.amount});
  }
}
