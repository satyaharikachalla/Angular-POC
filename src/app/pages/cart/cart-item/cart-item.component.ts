import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
@Component({
  selector: 'app-cart-item',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input()  item!: Product;
  cartservice = inject(CartService);

   
}
