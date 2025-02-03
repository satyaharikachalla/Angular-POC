import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
  providers: [DecimalPipe]
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    const decimalPipe = new DecimalPipe('en-US');
    const formattedTotal = decimalPipe.transform(total, '1.2-2');
    formattedTotal ? parseFloat(formattedTotal) : 0;

    return formattedTotal;
  });

  CountofItems = computed(() => {
    let count = 0;

    count = this.cartService.cart().length;

    return count;
  });
}
