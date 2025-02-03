import { Component, inject,  computed} from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent ,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartservice = inject(CartService);
  receivedString = '';

  showButtonClicked(emittedString: string) {
    this.receivedString = emittedString;
    alert(this.receivedString + ' Button clicked');
  }
  headerTitle = 'My Store';

  cartLabel = computed(() => `Cart (${this.cartservice.cart().length})`);
}
